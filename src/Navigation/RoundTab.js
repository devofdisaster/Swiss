import React from 'react';
import { Text } from 'react-native';

export default class RoundTab extends React.Component {
    static navigationOptions = {
        drawerLabel: 'RoundTab'
    }

    render() {
        return (
            <Text>Round matches</Text>
        )
    }
}
