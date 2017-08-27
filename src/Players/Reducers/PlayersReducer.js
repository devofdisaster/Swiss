import initialState from '../../Shared/InitialState'
import { Types } from '../../Shared/Actions'

const emptyStats = {
    comparison: { plus: 0, minus: 0 },
    games: 0,
    points: 0,
    results: { wins: 0, draws: 0, losses: 0 },
    sos: 0,
    ssos: 0
}

export default function (state = initialState.players, action) {
    switch (action.type) {
        case Types.PLAYERS_SAVE_NEW:
            return {
                ...state,
                [action.player.id]: {...action.player, ...emptyStats}
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
