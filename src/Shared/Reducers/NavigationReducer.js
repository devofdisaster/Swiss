import MainScreen from '../../Navigation/MainScreen'
import initialState from '../../Shared/InitialState'
import { NavigationActions } from 'react-navigation'
import { Types } from '../Actions'

export default function (state = initialState.nav, roundState = initialState.rounds, action) {
    const newNavState = MainScreen.router.getStateForAction(action, state) || state
    const roundsIndex = state.routes[0].routes.findIndex((route) => route.key === 'rounds')
    const routes = roundState.map((round, index) => ({ key: `Round-${index+1}`, routeName: `Round-${index+1}` }))
    const roundsRouteState = newNavState.routes[0].routes[roundsIndex].routes[0]

    if (undefined === roundsRouteState.index) {
        roundsRouteState.index = 0
    }

    roundsRouteState.routes = routes

    switch (action.type) {
        case NavigationActions.NAVIGATE:
            if (!action.routeName.indexOf('Round-')) {
                roundsRouteState.index = parseInt(
                    action.routeName.replace('Round-', ''),
                    10
                ) - 1
            }
            break
        case Types.ROUNDS_DELETE_LAST:
            roundsRouteState.routes = routes.slice(0, -1)

            if (roundsRouteState.index === roundsRouteState.routes.length) {
                roundsRouteState.index--
            }
    }

    return newNavState
}
