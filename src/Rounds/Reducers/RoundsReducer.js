import { Types } from '../../Shared/Actions'
import InitialState from '../../Shared/InitialState'

export default function RoundsReducer(state = InitialState.rounds, action) {
    switch (action.type) {
        case Types.ROUNDS_EDIT:
            return [
                ...state.slice(0, action.round),
                { ...state[action.round], finished: false },
                ...state.slice(action.round + 1),
            ]
        case Types.ROUNDS_FINISH:
            return [
                ...state.slice(0, action.round),
                { ...state[action.round], finished: true },
                ...state.slice(action.round + 1),
            ]
        case Types.ROUNDS_ADD_NEW:
            return [
                ...action.rounds
            ]
        case Types.ROUNDS_DELETE_LAST:
            return [
                ...state.slice(0, action.round.index)
            ]
        default:
            return state
    }
}
