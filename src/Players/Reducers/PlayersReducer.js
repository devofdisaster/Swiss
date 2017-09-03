import initialState from '../../Shared/InitialState'
import { Types } from '../../Shared/Actions'

export default function (state = initialState.players, action) {
    switch (action.type) {
        case Types.PLAYERS_ENABLE:
            return {
                ...state,
                [action.id]: {...state[action.id], enabled: true}
            }
        case Types.PLAYERS_DISABLE:
            return {
                ...state,
                [action.id]: {...state[action.id], enabled: false}
            }
        case Types.PLAYERS_SAVE_NEW:
            const emptyStats = {
                comparison: { plus: 0, minus: 0 },
                games: 0,
                points: 0,
                results: { wins: 0, draws: 0, losses: 0 },
                sos: 0,
                ssos: 0
            }

            return {
                ...state,
                [action.player.id]: {...action.player, ...emptyStats, order: Object.keys(state).length}
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
