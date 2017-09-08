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
                availableToLoad: [],
                loadModal: true,
                loading: true
            }
        case Types.TOURNAMENT_HIDE_SAVE_MODAL:
            return {
                ...state,
                saveModal: false,
                loading: false
            }
        case Types.TOURNAMENT_HIDE_LOAD_MODAL:
            return {
                ...state,
                loadModal: false,
                loading: false
            }
        case Types.TOURNAMENT_HIDE_MODALS:
            return {
                ...state,
                loadModal: false,
                saveModal: false
            }
        case Types.TOURNAMENT_SHOW_SAVED_ITEMS:
            return {
                ...state,
                availableToLoad: action.data,
                loading: false
            }
        default:
            return state
    }
}
