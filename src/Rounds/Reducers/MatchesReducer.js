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
        default:
            return state
    }
}

