import MainScreen from '../../Navigation/MainScreen'
import initialState from '../../Shared/InitialState'

export default function (state = initialState.nav, action) {
    return MainScreen.router.getStateForAction(action, state) || state
}
