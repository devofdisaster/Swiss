import MainScreen from '../../Navigation/MainScreen'
import initialState from '../../Shared/InitialState'
import { NavigationActions } from 'react-navigation'

export default function (state = initialState.nav, roundState = initialState.rounds, action) {
    const newNavState = MainScreen.router.getStateForAction(action, state) || state
    const roundsIndex = state.routes[0].routes.findIndex((route) => route.key === 'rounds')
    const routes = roundState.map((round, index) => ({ key: `Round-${index+1}`, routeName: `Round-${index+1}` }))

    if (undefined === newNavState.routes[0].routes[roundsIndex].routes[0].index) {
        newNavState.routes[0].routes[roundsIndex].routes[0].index = 0
    }

    newNavState.routes[0].routes[roundsIndex].routes[0].routes = routes

    if (action.type === NavigationActions.NAVIGATE && !action.routeName.indexOf('Round-')) {
        newNavState.routes[0].routes[roundsIndex].routes[0].index = parseInt(
            action.routeName.replace('Round-', ''),
            10
        ) - 1
    }

    return newNavState
}
