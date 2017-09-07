import React from 'react'
import {View, StyleSheet, Text, Image, TouchableNativeFeedback} from 'react-native'
import {connect} from 'react-redux'
import { Types } from '../../Shared/Actions'
import StartNewTournament from '../ActionCreators/StartNewTournament'

const styles = StyleSheet.create({
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    text: {
        color: '#000',
        fontSize: 20,
        marginLeft: 20
    }
})
const startIcon = require('material-design-icons/content/drawable-hdpi/ic_add_circle_outline_black_36dp.png')
const saveIcon = require('material-design-icons/content/drawable-hdpi/ic_archive_black_36dp.png')
const loadIcon = require('material-design-icons/content/drawable-hdpi/ic_unarchive_black_36dp.png')
const background = TouchableNativeFeedback.SelectableBackgroundBorderless()
const useForeground = TouchableNativeFeedback.canUseNativeForeground()

class TournamentMenuScreen extends React.Component {
    static navigationOptions = { title: 'Tournament' }

    render() {
        return (
            <View style={styles.body}>
                <TouchableNativeFeedback
                    background={background}
                    useForeground={useForeground}
                    onPress={this.props.onStartPress}
                >
                    <View style={styles.button}>
                        <Image source={startIcon}/>
                        <Text style={styles.text}>Start new tournament</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    background={background}
                    useForeground={useForeground}
                    onPress={this.props.onSavePress}
                >
                    <View style={styles.button}>
                        <Image source={saveIcon}/>
                        <Text style={styles.text}>Save tournament</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    background={background}
                    useForeground={useForeground}
                    onPress={this.props.onLoadPress}
                >
                    <View style={styles.button}>
                        <Image source={loadIcon}/>
                        <Text style={styles.text}>Load tournament</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    onStartPress: () => dispatch(StartNewTournament()),
    onSavePress: () => {},
    onLoadPress: () => {}
})

export default connect(null, mapDispatchToProps)(TournamentMenuScreen)
