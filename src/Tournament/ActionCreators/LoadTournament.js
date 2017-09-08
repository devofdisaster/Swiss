import { AsyncStorage, Alert, ToastAndroid } from 'react-native'
import { NavigationActions } from 'react-navigation'
import LoadTournamentData from './LoadTournamentData'
import HideLoadModal from './HideLoadModal'

export default (name) => (dispatch) => {
    let data

    AsyncStorage.getItem(name, (err, result) => {
            if (err) {
                throw err
            }

            data = result
        })
        .then(() => {
            dispatch(HideLoadModal())
            dispatch(LoadTournamentData(JSON.parse(data)))
            dispatch(NavigationActions.navigate({ routeName: 'players' }))
            ToastAndroid.show(`${name} loaded successfully!`, ToastAndroid.SHORT)
        })
        .catch((e) => {
            Alert.alert('Error!', `Couldn't load data for tournament ${name}`)
            console.error(e)
        })

}
