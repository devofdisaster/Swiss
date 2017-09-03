import React from 'react'
import { StackNavigator } from 'react-navigation'
import RoundsScreen from './Components/RoundsScreen'
import CustomizeRoundScreen from './Components/CustomizeRoundScreen'

const routes = {
    Rounds:         { screen: RoundsScreen },
    CustomizeRound: { screen: CustomizeRoundScreen }
}

const config = {
    initialRouteName: 'Rounds',
    headerMode: 'none'
}

export default class RoundsTab extends StackNavigator(routes, config) {
    static navigationOptions = { drawerLabel: 'Rounds' }
}

