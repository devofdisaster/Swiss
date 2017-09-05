import { NavigationActions } from 'react-navigation'
import MainScreen from '../Navigation/MainScreen'
import initialDevState from './InitialState.dev.js'

const initialAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Players' })
    ]
})

const initialState = {
    nav: MainScreen.router.getStateForAction(initialAction),
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

export default initialDevState()
