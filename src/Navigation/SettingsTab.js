import React from 'react';
import { Text } from 'react-native';

export default class SettingsTab extends React.Component {
    static navigationOptions = {
        drawerLabel: 'SettingsTab'
    }

    render() {
        return (
            <Text>Set up some shiz</Text>
        )
    }
}
