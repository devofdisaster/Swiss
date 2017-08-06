import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PlayersHeader from './PlayersHeader'

const styles = StyleSheet.create({
    temptext: { textAlign: 'center', borderWidth: 1, borderColor: 'lightblue' },
    view: { display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch' }
})

export default class PlayersScreen extends React.Component {
    static navigationOptions = { drawerLabel: 'Players' }

    render() {
        return (
            <View style={styles.view}>
                <PlayersHeader />
                <Text style={styles.temptext}>Table header</Text>
                <Text style={styles.temptext}>Table content</Text>
            </View>
        )
    }
}
