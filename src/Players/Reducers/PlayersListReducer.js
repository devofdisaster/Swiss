import InitialState from '../../Shared/InitialState'
import { Types } from '../../Shared/Actions'

export default function (state = InitialState.playersList, action) {
    switch (action.type) {
        case Types.PLAYERS_LIST_ADD:
            return {...state, players: [...state.players, action.player.id]}
        case Types.PLAYERS_LIST_CHANGE_STAT:
            return {...state, visibleStat: action.stat}
        default:
            return state
    }
}
