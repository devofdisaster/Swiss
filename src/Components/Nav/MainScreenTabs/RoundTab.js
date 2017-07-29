import React from 'react';
import { Text } from 'react-native';

export default class RoundTab extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'RoundTab'
    }

    render() {
        return (
            <Text>Round matches</Text>
        )
    }
}
