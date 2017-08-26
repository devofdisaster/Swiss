const PLAYERS_SAVE_NEW      = 'Players/SaveNew'
const PLAYERS_SAVE_EXISTING = 'Players/SaveExisting'
const PLAYERS_LIST_ADD      = 'PlayersList/Add'
const PLAYERS_LIST_REFRESH  = 'PlayersList/Refresh'

export const create = (type) => (payload = {}) => ({
    type,
    ...payload
})

export const Types = {
    PLAYERS_SAVE_EXISTING,
    PLAYERS_SAVE_NEW,
    PLAYERS_LIST_ADD,
    PLAYERS_LIST_REFRESH
}

export default { create, Types }
