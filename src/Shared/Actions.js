const PLAYERS_SAVE_NEW      = 'Players/SaveNew'
const PLAYERS_SAVE_EXISTING = 'Players/SaveExisting'
const PLAYERS_LIST_ADD      = 'PlayersList/Add'

export const create = (type) => (payload = {}) => ({
    type,
    ...payload
})

export const Types = {
    PLAYERS_SAVE_EXISTING,
    PLAYERS_SAVE_NEW,
    PLAYERS_LIST_ADD
}

export default { create, Types }
