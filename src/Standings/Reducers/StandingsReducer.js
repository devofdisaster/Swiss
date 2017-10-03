import InitialState from '../../Shared/InitialState'
import { Types } from '../../Shared/Actions'
import Player from '../../Shared/Domain/Player'

export default function (standingsState = InitialState.standings, playersState = InitialState.players, action) {
    const playersData = Object.values(playersState)

    switch (action.type) {
        case Types.PLAYERS_DELETE:
            return {
                ...standingsState,
                players: standingsState.players.filter((id) => id !== action.id)
            }
        case Types.STANDINGS_REFRESH:
            return {...standingsState, players: sortPlayers(playersData) }
        case Types.STANDINGS_CHANGE_STAT:
            return {...standingsState, visibleStat: action.stat }
        case Types.TOURNAMENT_START_NEW:
            return InitialState.standings
        case Types.TOURNAMENT_LOAD_DATA:
            return {
                players: sortPlayers(Object.values(action.data.players)),
                visibleStat: 'points'
            }
        default:
            return standingsState
    }
}

function sortPlayers(playersData) {
    return playersData.sort((previous, next) => {
        const previousPlayer = new Player(previous)
        const nextPlayer = new Player(next)

        return previousPlayer.hasLowerStanding(nextPlayer) ? 1 : -1;
    })
        .map((player) => player.id)
}
