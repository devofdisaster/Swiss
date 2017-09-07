import initialState from '../../Shared/InitialState'
import { Types } from '../../Shared/Actions'

export default function (state = initialState.players, action) {
    let newState

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
            newState = {...state}
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
        case Types.PLAYERS_UPDATE_SCORES:
            newState = {...state}

            Object.keys(action.scores).forEach((id) => newState[id] = {...newState[id], ...action.scores[id]})

            return newState
        case Types.ROUNDS_DELETE_LAST:
            newState = {}

            Object.values(state).forEach((player) => {
                newState[player.id] = {
                    ...player,
                    matches: player.matches.filter((id) => action.round.matches.indexOf(id) < 0)
                }
            })

            return newState
        case Types.TOURNAMENT_START_NEW:
            return initialState.players
        default:
            return state
    }
}
