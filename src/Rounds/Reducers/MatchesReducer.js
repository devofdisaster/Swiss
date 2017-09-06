import { Types } from '../../Shared/Actions'

export default function MatchesReducer(state, action) {
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
        default:
            return state
    }
}

