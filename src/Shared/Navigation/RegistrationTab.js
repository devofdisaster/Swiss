import React from 'react';
import { Text } from 'react-native';

export default class RegistrationTab extends React.Component {
    static navigationOptions = {
        drawerLabel: 'RegistrationTab'
    }

    render() {
        return (
            <Text>Register Players</Text>
        )
    }
}
