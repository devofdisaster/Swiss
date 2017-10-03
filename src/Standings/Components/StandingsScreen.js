import React from 'react'
import { View, StyleSheet } from 'react-native'
import StandingsTable from './StandingsTable'
import StandingsHeader from './StandingsHeader'

const styles = StyleSheet.create({
    view: { display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch', flex: -1 }
})

export default class StandingsScreen extends React.Component {
    static navigationOptions = { title: 'Standings' }

    render() {
        return (
            <View style={styles.view}>
                <StandingsHeader />
                <StandingsTable />
            </View>
        )
    }
}

