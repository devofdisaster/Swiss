import { Alert } from 'react-native'
import DeleteLastRound from './DeleteLastRound'

export default () => (dispatch, getState) => {
    const state = getState()

    if (!state.rounds.length) {
        return
    }

    Alert.alert(
        'Are you sure?',
        '',
        [
        { text: 'Cancel' },
            { text: 'OK', onPress: () => onConfirm(dispatch, state) }
        ]
    )
}

function onConfirm(dispatch, state) {
    const lastRound = state.rounds[state.rounds.length - 1]

    dispatch(DeleteLastRound(lastRound))
}
