import { AsyncStorage, Alert, ToastAndroid } from 'react-native'
import ShowModalSpinner from './ShowModalSpinner'
import HideSaveModal from './HideSaveModal'
import UpdateTournamentName from './UpdateTournamentName'

export default (name) => (dispatch, getState) => {
    if (!(name || '').trim()) {
        Alert.alert(`Can't save!`, `Saved name can't be empty!`)

        return false;
    }

    const state = getState()
    const stateToSave = {
        matches:        state.matches,
        players:        state.players,
        rounds:         state.rounds,
        tournament:     { name }
    }

    dispatch(ShowModalSpinner())
    AsyncStorage.setItem(name, JSON.stringify(stateToSave), handleError)
        .then(() => {
            dispatch(HideSaveModal())
            dispatch(UpdateTournamentName(name))
            ToastAndroid.show(`Saved as ${name}`, ToastAndroid.SHORT)
        })
        .catch(() => {
            Alert.alert('Error!', `Couldn't save data for tournament ${name}`)
        })
}

function handleError(err) {
    if (err) {
        throw err
    }
}
