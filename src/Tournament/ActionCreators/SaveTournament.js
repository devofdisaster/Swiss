import { AsyncStorage, Alert, ToastAndroid } from 'react-native'
import ShowModalSpinner from './ShowModalSpinner'
import HideSaveModal from './HideSaveModal'

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
        playersList:    { players: Object.keys(state.players) },
        tournament:     { name }
    }

    dispatch(ShowModalSpinner())
    AsyncStorage.setItem(name, stateToSave, (err) => {throw err })
        .then(() => {
            dispatch(HideSaveModal())
            ToastAndroid.show(`Saved as ${name}`, ToastAndroid.SHORT)
        })
        .catch((e) => {
            Alert.alert('Error!', `Couldn't save data for tournament ${name}`)
            console.error(e)
        })
}
