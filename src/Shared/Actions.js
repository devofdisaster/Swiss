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
const ROUNDS_UPDATE_CUSTOM_MATCHES  = 'Rounds/UpdateCustomMatches'
const STANDINGS_CHANGE_STAT         = 'Standings/ChangeStat'
const TOURNAMENT_START_NEW          = 'Tournament/StartNew'
const TOURNAMENT_HIDE_LOAD_MODAL    = 'Tournament/HideLoadModal'
const TOURNAMENT_HIDE_SAVE_MODAL    = 'Tournament/HideSaveModal'
const TOURNAMENT_SHOW_LOAD_MODAL    = 'Tournament/ShowLoadModal'
const TOURNAMENT_SHOW_SAVE_MODAL    = 'Tournament/ShowSaveModal'
const TOURNAMENT_SHOW_SPINNER       = 'Tournament/ShowSpinner'
const TOURNAMENT_HIDE_MODALS        = 'Tournament/HideModals'
const TOURNAMENT_SHOW_SAVED_ITEMS   = 'Tournament/ShowSavedItems'
const TOURNAMENT_LOAD_DATA          = 'Tournament/LoadData'

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
    ROUNDS_UPDATE_CUSTOM_MATCHES,
    STANDINGS_CHANGE_STAT,
    TOURNAMENT_START_NEW,
    TOURNAMENT_HIDE_LOAD_MODAL,
    TOURNAMENT_HIDE_SAVE_MODAL,
    TOURNAMENT_SHOW_LOAD_MODAL,
    TOURNAMENT_SHOW_SAVE_MODAL,
    TOURNAMENT_HIDE_MODALS,
    TOURNAMENT_SHOW_SAVED_ITEMS,
    TOURNAMENT_SHOW_SPINNER,
    TOURNAMENT_LOAD_DATA
}

export default { create, Types }
