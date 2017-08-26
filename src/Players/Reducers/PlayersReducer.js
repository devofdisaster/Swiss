import initialState from '../../Shared/InitialState'
import { Types } from '../../Shared/Actions'

export default function (state = initialState.players, action) {
    switch (action.type) {
        case Types.PLAYERS_SAVE_NEW:
            return {
                ...state,
                [action.player.id]: action.player
            }
        case Types.PLAYERS_SAVE_EXISTING:
            return {
                ...state,
                [action.player.id]: {...state[action.player.id], ...action.player}
            }
        default:
            return state
    }
}
