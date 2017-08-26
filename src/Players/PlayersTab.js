import React from 'react'
import { StackNavigator } from 'react-navigation'
import PlayersScreen from './Components/PlayersScreen'
import EditPlayerScreen from './Components/EditPlayerScreen'

const routes = {
    Players: { screen: PlayersScreen },
    EditPlayer: { screen: EditPlayerScreen }
}

const config = {
    initialRouteName: 'Players',
    headerMode: 'none'
}

export default class PlayersTab extends StackNavigator(routes, config) {
    static navigationOptions = { drawerLabel: 'Players' }
}
