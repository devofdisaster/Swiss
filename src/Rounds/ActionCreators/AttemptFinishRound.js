import {Alert} from 'react-native'
import FinishRound from './FinishRound'
import RecalculateScores from '../../Players/ActionCreators/RecalculateScores'

export default (index) => (dispatch, getState) => {
    const state = getState()
    const allMatchesHaveResults = state.rounds[index].matches.reduce(
        (carry, id) => {
            return carry && (state.matches[id].result !== null)
        },
        true
    )

    if (!allMatchesHaveResults) {
        Alert.alert(`Can't finish!`, 'Fill in missing match results!')

        return false
    }

    dispatch(FinishRound(index))
    dispatch(RecalculateScores())

    return true
}
