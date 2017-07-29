import React from 'react';
import { Text } from 'react-native';

export default class StandingsTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'StandingsTab'
    }

    render() {
        return (
            <Text>Player standings</Text>
        )
    }
}
