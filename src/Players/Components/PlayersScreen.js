import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PlayersHeader from './PlayersHeader'
import PlayerTable from './PlayerTable'

const styles = StyleSheet.create({
    view: { display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch', flex: -1 }
})

export default class PlayersScreen extends React.Component {
    static navigationOptions = { title: 'Players' }

    render() {
        return (
            <View style={styles.view}>
                <PlayersHeader />
                <PlayerTable />
            </View>
        )
    }
}
