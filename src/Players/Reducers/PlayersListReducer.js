import InitialState from '../../Shared/InitialState'
import { Types } from '../../Shared/Actions'
import Player from '../../Shared/Domain/Player'

export default function (listState = InitialState.playersList, playersState = InitialState.players, action) {
    const playersData = Object.values(playersState)
    let visibleStat

    switch (action.type) {
        case Types.PLAYERS_DELETE:
            return {
                ...listState,
                players: listState.players.filter((id) => id !== action.id)
            }
        case Types.PLAYERS_LIST_REFRESH:
            return {
                ...listState,
                players: sortPlayers(playersData, listState.sortBy, listState.order, listState.visibleStat),
            }
        case Types.PLAYERS_LIST_CHANGE_STAT:
            visibleStat = action.stat

            return {...listState, visibleStat }
        case Types.PLAYERS_LIST_SORT_BY_COLUMN:
            const sortBy = action.column
            const order = getOrder(listState, sortBy);

            visibleStat = listState.visibleStat

            return {
                ...listState,
                order,
                players: sortPlayers(playersData, sortBy, order, visibleStat),
                sortBy
            }
        case Types.TOURNAMENT_START_NEW:
            return InitialState.playersList
        case Types.TOURNAMENT_LOAD_DATA:
            return {
                ...listState,
                players: sortPlayers(Object.values(action.data.players), 'stat', 'desc', 'points'),
                sortBy: 'stat',
                order: 'desc',
                visibleStat: 'points'
            }
        default:
            return listState
    }
}

function getOrder(state, sortBy) {
    if (state.sortBy === sortBy) {
        return state.order === 'asc' ? 'desc' : 'asc'
    }

    switch (sortBy) {
        case 'stat':
            return 'desc'
        default:
            return 'asc'
    }
}

function sortPlayers(playersData, column, order, visibleStat) {
    return playersData.sort((previous, next) => {
            const previousPlayer = new Player(previous)
            const nextPlayer = new Player(next)

            switch (column) {
                case 'name':
                    return valueConditionByOrder(previousPlayer.renderName() < nextPlayer.renderName(), order)
                case 'order':
                    return valueConditionByOrder(
                        previousPlayer.getOriginalOrder() < nextPlayer.getOriginalOrder(),
                        order
                    )
                case 'stat':
                    return valueConditionByOrder(previousPlayer.hasLowerStat(visibleStat, nextPlayer), order)
            }
        })
        .map((player) => player.id)
}

function valueConditionByOrder(condition, order) {
    if (condition) {
        return order === 'asc' ? -1 : 1
    }

    return order === 'asc' ? 1 : -1
}
