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
        case Types.PLAYERS_DELETE:
            const newState = {...state}
            const deletedOrder = state[action.id].order

            Object.keys(state)
                .filter((id) => state[id].order > deletedOrder)
                .map((id) => ({...state[id]}))
                .forEach((player) => {
                    --player.order
                    newState[player.id] = player
                })

            delete newState[action.id]

            return newState
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
        case Types.ROUNDS_ADD_NEW:
            return {
                ...action.players
            }
        default:
            return state
    }
}
