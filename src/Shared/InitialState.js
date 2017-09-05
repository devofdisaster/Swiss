import { NavigationActions } from 'react-navigation'
import MainScreen from '../Navigation/MainScreen'

const initialAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Players' })
    ]
})

function fabricateStateForRoundTabNavigator() {
    const state = MainScreen.router.getStateForAction(initialAction)
    const roundsIndex = state.routes[0].routes.findIndex((route) => route.key === 'rounds')

    return {
        ...state,
        routes: [
            {
                ...state.routes[0],
                routes: [
                    ...state.routes[0].routes.slice(0, roundsIndex),
                    {
                        ...state.routes[0].routes[roundsIndex],
                        routes: [
                            {
                                ...state.routes[0].routes[roundsIndex].routes[0]
                            }
                        ]
                    },
                    ...state.routes[0].routes.slice(roundsIndex + 1)
                ]
            },
            ...state.routes.slice(1)
        ]
    }
}

const initialState = {
    nav: fabricateStateForRoundTabNavigator(),
    matches: {},
    players: {},
    rounds: [],
    playersList: {
        sortBy: 'order',
        players: [],
        order: 'asc',
        visibleStat: 'points'
    }
}

export default initialState
