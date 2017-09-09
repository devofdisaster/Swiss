import { Alert, AsyncStorage, ToastAndroid } from 'react-native'
import ShowLoadModalAndLoadData from './ShowLoadModalAndLoadData'

export default (name) => (dispatch) => {
    AsyncStorage.removeItem(name, (err) => {
        if (err) {
            throw err
        }
    })
        .then(() => {
            dispatch(ShowLoadModalAndLoadData())
            ToastAndroid.show(`${name} deleted!`, ToastAndroid.SHORT)
        })
        .catch(() => {
            Alert.alert('Error!', `Couldn't delete saved data for tournament ${name}`)
        })
}
