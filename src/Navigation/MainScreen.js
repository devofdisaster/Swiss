import { DrawerNavigator, NavigationActions } from 'react-navigation';
import { BackHandler } from 'react-native'
import RoundsTab from './RoundTab';
import StandingsTab from './StandingsTab';
import SettingsTab from './SettingsTab'
import PlayersTab from '../Players/PlayersTab'

const routes = {
    players:    { screen: PlayersTab,   name: 'players'   },
    rounds:     { screen: RoundsTab,    name: 'rounds'    },
    standings:  { screen: StandingsTab, name: 'standings' },
    settings:   { screen: SettingsTab,  name: 'settings'  }
}
const config = { initialRouteName: 'players' }

export default class MainScreen extends DrawerNavigator(routes, config) {
    shouldCloseApp(navState) {
        console.log(navState)
        return navState.index === 0 && navState.routes[0].index === 0
    }

    componentDidMount() {
        this.handler = BackHandler.addEventListener('backPress', () => {
            const { dispatch, state } = this.props.navigation

            if (this.shouldCloseApp(state)) {
                return false
            }

            dispatch(NavigationActions.back())
            return true
        })
    }

    componentWillUnmount() {
        this.handler.remove()
    }
}
