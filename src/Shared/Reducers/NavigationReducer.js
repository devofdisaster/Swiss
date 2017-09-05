import MainScreen from '../../Navigation/MainScreen'
import initialState from '../../Shared/InitialState'
import { NavigationActions } from 'react-navigation'

export default function (state = initialState.nav, roundState = initialState.rounds, action) {
    const newNavState = MainScreen.router.getStateForAction(action, state) || state
    const roundsIndex = state.routes[0].routes.findIndex((route) => route.key === 'rounds')
    const routes = roundState.map((round, index) => ({ key: `Round-${index+1}`, routeName: `Round-${index+1}` }))
    const newState = {
        ...newNavState,
        routes: [
            {
                ...newNavState.routes[0],
                routes: [
                    ...newNavState.routes[0].routes.slice(0, roundsIndex),
                    {
                        ...newNavState.routes[0].routes[roundsIndex],
                        routes: [
                            {
                                ...newNavState.routes[0].routes[roundsIndex].routes[0],
                                routes,
                                index: newNavState.routes[0].routes[roundsIndex].routes[0].index || 0
                            }
                        ]
                    },
                    ...newNavState.routes[0].routes.slice(roundsIndex + 1)
                ]
            },
            ...newNavState.routes.slice(1)
        ]
    }

    if (action.type === NavigationActions.NAVIGATE && !action.routeName.indexOf('Round-')) {
        newState.routes[0].routes[roundsIndex].routes[0].index = parseInt(
            action.routeName.replace('Round-', ''),
            10
        ) - 1
    }

    return newState
}
