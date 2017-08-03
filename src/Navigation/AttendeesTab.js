import React from 'react'
import { Text, View, ToolbarAndroid } from 'react-native'
import AttendeesHeader from '../Attendees/Components/AttendeesHeader'

export default class AttendeesTab extends React.Component {
    static navigationOptions = {
        drawerLabel: 'AttendeesTab'
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
                <AttendeesHeader />
                <Text>Register Players</Text>
            </View>
        )
    }
}
