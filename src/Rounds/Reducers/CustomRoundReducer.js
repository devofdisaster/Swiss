import { Types } from '../../Shared/Actions'
import InitialState from '../../Shared/InitialState'

export default (state = InitialState.customRound, action) => {
    switch (action.type) {
        case Types.ROUNDS_UPDATE_CUSTOM_MATCHES:
            return {
                available: action.available || [],
                selected: action.selected || []
            }
        default:
            return state
    }
}
