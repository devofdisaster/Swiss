import { Alert } from 'react-native'
import DeleteSavedItem from './DeleteSavedItem'

export default (name) => (dispatch) => {
    Alert.alert(
        'Are you sure?',
        `Do you want to delete ${name}?`,
        [
            { text: 'Cancel' },
            { text: 'OK', onPress: () => dispatch(DeleteSavedItem(name)) }
        ]
    )
}
