import { NavigationActions } from 'react-navigation'
import MainScreen from './Components/MainScreen'

const initialAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'TournamentMenu' })
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

const date = new Date()
const initialState = {
    nav: fabricateStateForRoundTabNavigator(),
    matches: {},
    players: {},
    rounds: [],
    customRound: {
        available: [],
        selected: []
    },
    playersList: {
        sortBy: 'order',
        players: [],
        order: 'asc',
        visibleStat: 'points'
    },
    standings: {
        players: [],
        visibleStat: 'points'
    },
    tournament: {
        name: `Tournament ${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`,
        availableToLoad: [],
        loading: false,
        loadModal: false,
        saveModal: false
    }
}

export default initialState
