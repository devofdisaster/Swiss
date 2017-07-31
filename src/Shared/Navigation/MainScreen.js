import { DrawerNavigator } from 'react-navigation';
import { BackHandler } from 'react-native'
import RegistrationTab from './RegistrationTab';
import RoundsTab from './RoundTab';
import StandingsTab from './StandingsTab';

const routes = {
    attendees: { screen: RegistrationTab, name: 'attendees' },
    routes: { screen: RoundsTab, name: 'routes' },
    standings: { screen: StandingsTab, name: 'standings' }
}

const config = {
    initialRouteName: 'attendees'
}

export default class MainScreen extends DrawerNavigator(routes, config) {
    shouldCloseApp(navState) {
        return navState.index === 0 && navState.routes.index === 0
    }

    componentDidMount() {
        this.handler = BackHandler.addEventListener('backPress', () => {
            const { dispatch, state } = this.props.navigation

            if (this.shouldCloseApp(state)) {
                return false
            }

            dispatch({ type: 'Navigation/BACK' })
            return true
        })
    }

    componentWillUnmount() {
        this.handler.remove()
    }
}
