import React from 'react'
import { StackNavigator } from 'react-navigation'
import PlayersScreen from './Components/PlayersScreen'
import EditPlayerScreen from './Components/EditPlayerScreen'
import PlayerDetailsScreen from './Components/PlayerDetailsScreen'

const routes = {
    Players: { screen: PlayersScreen },
    EditPlayer: { screen: EditPlayerScreen },
    PlayerDetails: { screen: PlayerDetailsScreen }
}

const config = {
    initialRouteName: 'Players',
    headerMode: 'none'
}

export default class PlayersTab extends StackNavigator(routes, config) {
    static navigationOptions = { drawerLabel: 'Players' }
}
