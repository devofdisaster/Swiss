import ShowLoadModal from './ShowLoadModal'
import { AsyncStorage, Alert } from 'react-native'
import ShowAvailableSaves from './ShowAvailableSaves'

export default () => (dispatch) => {
    dispatch(ShowLoadModal())

    loadAvailableData()
        .then((data) => dispatch(ShowAvailableSaves(data)))
        .catch(() => Alert.alert('Error!', `Couldn't load saved data!`))
}

async function loadAvailableData() {
    let foundKeys = []

    await AsyncStorage.getAllKeys((err, keys) => {
        if (err) {
            throw err
        }

        foundKeys = keys || []
    })

    return foundKeys
}
