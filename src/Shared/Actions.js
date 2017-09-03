const PLAYERS_ENABLE                = 'Players/Enable'
const PLAYERS_DISABLE               = 'Players/Disable'
const PLAYERS_SAVE_NEW              = 'Players/SaveNew'
const PLAYERS_SAVE_EXISTING         = 'Players/SaveExisting'
const PLAYERS_LIST_REFRESH          = 'PlayersList/Refresh'
const PLAYERS_LIST_CHANGE_STAT      = 'PlayersList/ChangeStat'
const PLAYERS_LIST_SORT_BY_COLUMN   = 'PlayersList/SortByColumn'

export const create = (type) => (payload = {}) => ({
    type,
    ...payload
})

export const Types = {
    PLAYERS_ENABLE,
    PLAYERS_DISABLE,
    PLAYERS_SAVE_EXISTING,
    PLAYERS_SAVE_NEW,
    PLAYERS_LIST_REFRESH,
    PLAYERS_LIST_CHANGE_STAT,
    PLAYERS_LIST_SORT_BY_COLUMN
}

export default { create, Types }
