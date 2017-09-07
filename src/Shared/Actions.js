const PLAYERS_ENABLE                = 'Players/Enable'
const PLAYERS_ATTEMPT_DISABLE       = 'Players/AttemptDisable'
const PLAYERS_DISABLE               = 'Players/Disable'
const PLAYERS_DELETE                = 'Players/Delete'
const PLAYERS_SAVE_NEW              = 'Players/SaveNew'
const PLAYERS_SAVE_EXISTING         = 'Players/SaveExisting'
const PLAYERS_UPDATE_SCORES         = 'Players/UpdateScores'
const PLAYERS_LIST_REFRESH          = 'PlayersList/Refresh'
const PLAYERS_LIST_CHANGE_STAT      = 'PlayersList/ChangeStat'
const PLAYERS_LIST_SORT_BY_COLUMN   = 'PlayersList/SortByColumn'
const ROUNDS_ADD_NEW                = 'Rounds/AddNew'
const ROUNDS_EDIT                   = 'Rounds/Edit'
const ROUNDS_ATTEMPT_FINISH         = 'Rounds/AttemptFinish'
const ROUNDS_FINISH                 = 'Rounds/Finish'
const ROUNDS_GENERATE_NEW           = 'Rounds/GenerateNew'
const ROUNDS_CUSTOMIZE_NEW          = 'Rounds/CustomizeNew'
const ROUNDS_DELETE_LAST            = 'Rounds/DeleteLast'
const ROUNDS_CHANGE_MATCH_RESULT    = 'Rounds/ChangeMatchResult'
const TOURNAMENT_START_NEW          = 'Tournament/StartNew'

export const create = (type) => (payload = {}) => ({
    type,
    ...payload
})

export const Types = {
    PLAYERS_ENABLE,
    PLAYERS_ATTEMPT_DISABLE,
    PLAYERS_DISABLE,
    PLAYERS_DELETE,
    PLAYERS_SAVE_EXISTING,
    PLAYERS_SAVE_NEW,
    PLAYERS_UPDATE_SCORES,
    PLAYERS_LIST_REFRESH,
    PLAYERS_LIST_CHANGE_STAT,
    PLAYERS_LIST_SORT_BY_COLUMN,
    ROUNDS_ADD_NEW,
    ROUNDS_EDIT,
    ROUNDS_ATTEMPT_FINISH,
    ROUNDS_FINISH,
    ROUNDS_CUSTOMIZE_NEW,
    ROUNDS_DELETE_LAST,
    ROUNDS_GENERATE_NEW,
    ROUNDS_CHANGE_MATCH_RESULT,
    TOURNAMENT_START_NEW
}

export default { create, Types }
