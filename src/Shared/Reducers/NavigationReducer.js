import MainScreen from '../../Navigation/MainScreen'
import initialState from '../../Shared/InitialState'

export default function (state = initialState.nav, action) {
    switch (action.type) {
        default:
            return MainScreen.router.getStateForAction(action, state) || state
    }
}
