import { NavigationActions } from 'react-navigation'
import MainScreen from '../Navigation/MainScreen'

const initialAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Players' })
    ]
})

const initialState = {
    nav: MainScreen.router.getStateForAction(initialAction),
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
