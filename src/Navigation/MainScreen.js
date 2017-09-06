import React from 'react'
import {DrawerItems, DrawerNavigator, NavigationActions} from 'react-navigation';
import { BackHandler } from 'react-native'

import StandingsTab from './StandingsTab';
import SettingsTab from './SettingsTab'
import PlayersTab from '../Players/PlayersTab'
import RoundsTab from '../Rounds/RoundsTab'
import RecalculateScores from '../Players/ActionsCreators/RecalculateScores'

const routes = {
    players:    { screen: PlayersTab,   name: 'players'   },
    rounds:     { screen: RoundsTab,    name: 'rounds'    },
    standings:  { screen: StandingsTab, name: 'standings' },
    settings:   { screen: SettingsTab,  name: 'settings'  }
}

const config = {
    initialRouteName: 'players',
    contentComponent: (props) => <DrawerItems
        {
            ...{
                ...props,
                onItemPress: ({ route }) => {
                    const { dispatch } = props.navigation

                    if (0 === ['players', 'settings'].indexOf(route.routeName)) {
                        dispatch(RecalculateScores())
                    }

                    dispatch(NavigationActions.navigate({ routeName: route.routeName }))
                }
            }
        }
    />
}

export default class MainScreen extends DrawerNavigator(routes, config) {
    shouldCloseApp(navState) {
        return navState.index === 0 &&
            navState.routes[0].index === 0 &&
            navState.routes[0].routes[0].index === 0
    }

    componentDidMount() {
        this.handler = BackHandler.addEventListener('backPress', () => {
            const { dispatch, state } = this.props.navigation

            if (this.shouldCloseApp(state)) {
                return false
            }

            dispatch(RecalculateScores())
            dispatch(NavigationActions.back())
            return true
        })
    }

    componentWillUnmount() {
        this.handler.remove()
    }
}
