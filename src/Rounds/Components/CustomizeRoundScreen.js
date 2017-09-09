import React from 'react'
import {View, StyleSheet, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import CustomizeRoundHeader from './CustomizeRoundHeader'
import SelectedMatchesSubscreen from './SelectedMatchesSubscreen'
import AvailableMatchesSubscreen from './AvailableMatchesSubscreen'
import Player from '../../Shared/Domain/Player'
import AddMatchToCustomRound from '../ActionCreators/AddMatchToCustomRound'
import RemoveMatchFromCustomRound from '../ActionCreators/RemoveMatchFromCustomRound'
import AttemptAcceptCustomRound from '../ActionCreators/AttemptAcceptCustomRound'
import AttemptAutofillRound from '../ActionCreators/AttemptAutofillRound'

const style = StyleSheet.create({
    screenPortrait: { flex: 1, alignItems: 'stretch', justifyContent: 'space-between' },
    screenLandscape: { flexDirection: 'row',flex: 1, alignItems: 'stretch', justifyContent: 'space-between' },
    subScreenPortrait: { height: '50%' },
    subScreenLandscape: { width: '50%' },
    firstSubScreenLandscape: { borderRightColor: 'grey', borderRightWidth: 2 },
    firstSubScreenPortrait: { borderBottomColor: 'grey', borderBottomWidth: 2 },
    empty: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flex: 1
    },
    info: { fontSize: 16, maxWidth: '80%', textAlign: 'center' }
})

const firstSubScreenPortrait = StyleSheet.flatten([style.subScreenPortrait, style.firstSubScreenPortrait])
const firstSubScreenLandscape = StyleSheet.flatten([style.subScreenLandscape, style.firstSubScreenLandscape])


class CustomizeRoundScreen extends React.Component {
    render() {
        const { height, width } = Dimensions.get('window')
        const viewStyle = height > width ? style.screenPortrait : style.screenLandscape
        const firstViewStyle = height > width ? firstSubScreenPortrait : firstSubScreenLandscape
        const secondViewStyle = height > width ? style.subScreenPortrait : style.subScreenLandscape

        return (
            <View style={{ width: '100%', height: '100%' }}>
                <CustomizeRoundHeader
                    onBackClick={this.props.onBackClick}
                    onAutofillClick={this.props.onAutofillClick}
                    onSaveClick={this.props.onSaveClick}
                />
                <View style={viewStyle}>
                    <View style={firstViewStyle}>
                        {
                            this.props.availableMatches.length ?
                                <AvailableMatchesSubscreen
                                    items={this.props.availableMatches}
                                    onAddMatchClick={this.props.onAddMatchClick}
                                /> :
                                <View style={style.empty}>
                                    <Text style={style.info}>
                                        No valid matches available!
                                    </Text>
                                </View>
                        }

                    </View>
                    <View style={secondViewStyle}>
                        {
                            this.props.selectedMatches.length ?
                                <SelectedMatchesSubscreen
                                    items={this.props.selectedMatches}
                                    onRemoveMatchClick={this.props.onRemoveMatchClick}
                                /> :
                                <View style={style.empty}>
                                    <Text style={style.info}>
                                        Tap on a matchup to add or remove it from this round!
                                    </Text>
                                </View>
                        }
                    </View>
                </View>
            </View>
        )
    }
}

function mapMatchToView(players, match) {
    const playerOne = new Player(players[match.player1])
    const playerTwo = match.player2 ? new Player(players[match.player2]) : null

    return {
        id: match.id,
        player1name: playerOne.renderName(),
        player2name: playerTwo ? playerTwo.renderName() : 'BYE',
        result: match.result
    }
}

const mapStateToProps = (state) => {
    const players = state.players
    const mapCallback = mapMatchToView.bind(null, players)

    return {
        availableMatches: state.customRound.available.map(mapCallback),
        selectedMatches: state.customRound.selected.map(mapCallback)
    }
}

const mapDispatchToProps = (dispatch) => ({
    onBackClick: () => dispatch(NavigationActions.back()),
    onAutofillClick: () => dispatch(AttemptAutofillRound()),
    onSaveClick: () => dispatch(AttemptAcceptCustomRound()),
    onAddMatchClick: (match) => dispatch(AddMatchToCustomRound(match)),
    onRemoveMatchClick: (match) => dispatch(RemoveMatchFromCustomRound(match))
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeRoundScreen)

