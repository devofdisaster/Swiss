import React from 'react'
import { View, Text } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import PlayerDetailsHeader from './PlayerDetailsHeader'
import Player from '../../Shared/Domain/Player'

const statViewStyle = { flexDirection: 'row', justifyContent: 'flex-start' }
const statLabelStyle = { width: '50%', textAlign: 'right', fontSize: 16, marginRight: 10 }
const largeTextStyle = { textAlign: 'center', fontSize: 18, fontWeight: 'bold' }
const enabledTextStyle = { textAlign: 'center' }
const statsTitleStyle = { marginTop: 20, marginBottom: 20 }
const statTextStyle = { fontSize: 16 }

class PlayerDetailsScreen extends React.Component {
    render() {
        const player = new Player(this.props.player)

        return (
            <View>
                <PlayerDetailsHeader
                    onBackClick={this.props.onBackClick}
                />
                <Text style={largeTextStyle}>{player.renderName()}</Text>
                <View><Text style={enabledTextStyle}>{player.isEnabled() ? 'Enabled' : 'Disabled'}</Text></View>
                <Text style={{...largeTextStyle, ...statsTitleStyle}}>Stats:</Text>
                <View style={statViewStyle}>
                    <Text style={statLabelStyle}>+/-:</Text>
                    <Text style={statTextStyle}>{player.renderStatistic('comparison')}</Text>
                </View>
                <View style={statViewStyle}>
                    <Text style={statLabelStyle}>W-D-L:</Text>
                    <Text style={statTextStyle}>{player.renderStatistic('results')}</Text>
                </View>
                <View style={statViewStyle}>
                    <Text style={statLabelStyle}>Points:</Text>
                    <Text style={statTextStyle}>{player.renderStatistic('points')}</Text>
                </View>
                <View style={statViewStyle}>
                    <Text style={statLabelStyle}>SoS:</Text>
                    <Text style={statTextStyle}>{player.renderStatistic('sos')}</Text>
                </View>
                <View style={statViewStyle}>
                    <Text style={statLabelStyle}>SSoS:</Text>
                    <Text style={statTextStyle}>{player.renderStatistic('ssos')}</Text>
                </View>
                <View style={statViewStyle}>
                    <Text style={statLabelStyle}>Games:</Text>
                    <Text style={statTextStyle}>{player.renderStatistic('games')}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    player: state.players[ownProps.navigation.state.params.id]
})

const mapDispatchToProps = (dispatch) => ({
    onBackClick: () => dispatch(NavigationActions.back())
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerDetailsScreen);
