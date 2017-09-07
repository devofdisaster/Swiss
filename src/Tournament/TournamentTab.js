import { StackNavigator } from 'react-navigation'
import TournamentMenuScreen from './Components/TournamentMenuScreen'

const routes = {
    TournamentMenu: { screen: TournamentMenuScreen }
}

const config = {
    initialRouteName: 'TournamentMenu',
    headerMode: 'none'
}

export default class TournamentTab extends StackNavigator(routes, config) {
    static navigationOptions = { drawerLabel: 'Tournament' }
}
