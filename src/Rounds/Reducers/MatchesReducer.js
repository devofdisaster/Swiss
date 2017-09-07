import { Types } from '../../Shared/Actions'
import InitialState from '../../Shared/InitialState'

export default function MatchesReducer(state = InitialState.matches, action) {
    switch (action.type) {
        case Types.ROUNDS_CHANGE_MATCH_RESULT:
            return {
                ...state,
                [action.id]: { ...state[action.id], result: action.result }
            }
        case Types.ROUNDS_ADD_NEW:
            return {
                ...action.matches
            }
        case Types.ROUNDS_DELETE_LAST:
            let newState = {...state}

            action.round.matches.forEach((id) => delete newState[id])

            return newState
        case Types.TOURNAMENT_START_NEW:
            return InitialState.matches
        default:
            return state
    }
}

