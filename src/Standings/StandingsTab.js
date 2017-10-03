import React from 'react'
import { StackNavigator } from 'react-navigation'
import StandingsScreen from './Components/StandingsScreen'

const routes = { Standings: { screen: StandingsScreen } }

const config = {
    initialRouteName: 'Standings',
    headerMode: 'none'
}

export default class StandingsTab extends StackNavigator(routes, config) {
    static navigationOptions = { drawerLabel: 'Standings' }
}
