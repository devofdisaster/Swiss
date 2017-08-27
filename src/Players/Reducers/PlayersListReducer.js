import InitialState from '../../Shared/InitialState'
import { Types } from '../../Shared/Actions'

export default function (state = InitialState.playersList, action) {
    switch (action.type) {
        case Types.PLAYERS_LIST_ADD:
            return {...state, players: [...state.players, action.player.id]}
        default:
            return state
    }
}
