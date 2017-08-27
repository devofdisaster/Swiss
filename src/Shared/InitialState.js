import { NavigationActions } from 'react-navigation'
import MainScreen from '../Navigation/MainScreen'

const initialAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Players' })
    ]
})

export default initialState = {
    nav: MainScreen.router.getStateForAction(initialAction),
    players: {},
    playersList: {
        players: [],
        visibleStat: 'points'
    }
}
