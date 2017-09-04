const PLAYERS_ENABLE                = 'Players/Enable'
const PLAYERS_DISABLE               = 'Players/Disable'
const PLAYERS_SAVE_NEW              = 'Players/SaveNew'
const PLAYERS_SAVE_EXISTING         = 'Players/SaveExisting'
const PLAYERS_LIST_REFRESH          = 'PlayersList/Refresh'
const PLAYERS_LIST_CHANGE_STAT      = 'PlayersList/ChangeStat'
const PLAYERS_LIST_SORT_BY_COLUMN   = 'PlayersList/SortByColumn'
const ROUNDS_EDIT                   = 'Rounds/Edit'
const ROUNDS_ATTEMPT_FINISH         = 'Rounds/AttemptFinish'
const ROUNDS_FINISH                 = 'Rounds/Finish'
const ROUNDS_GENERATE_NEW           = 'Rounds/GenerateNew'
const ROUNDS_CUSTOMIZE_NEW          = 'Rounds/CustomizeNew'
const ROUNDS_DELETE_LAST            = 'Rounds/DeleteLast'

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
    PLAYERS_LIST_SORT_BY_COLUMN,
    ROUNDS_EDIT,
    ROUNDS_ATTEMPT_FINISH,
    ROUNDS_FINISH,
    ROUNDS_CUSTOMIZE_NEW,
    ROUNDS_DELETE_LAST,
    ROUNDS_GENERATE_NEW
}

export default { create, Types }
