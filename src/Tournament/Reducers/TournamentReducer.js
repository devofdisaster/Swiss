import InitialState from '../../Shared/InitialState'
import {Types} from '../../Shared/Actions'

export default (state = InitialState.tournament, action) => {
    switch (action.type) {
        case Types.TOURNAMENT_SHOW_SAVE_MODAL:
            return {
                ...state,
                saveModal: true
            }
        case Types.TOURNAMENT_SHOW_LOAD_MODAL:
            return {
                ...state,
                loadModal: true
            }
        case Types.TOURNAMENT_HIDE_SAVE_MODAL:
            return {
                ...state,
                saveModal: false
            }
        case Types.TOURNAMENT_HIDE_LOAD_MODAL:
            return {
                ...state,
                loadModal: false
            }
        case Types.TOURNAMENT_HIDE_MODALS:
            return {
                ...state,
                loadModal: false,
                saveModal: false
            }
        default:
            return state
    }
}
