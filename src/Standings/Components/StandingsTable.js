import React from 'react'
import { View, Alert } from 'react-native'
import { connect } from 'react-redux'
import Player from '../../Shared/Domain/Player'
import EditExistingPlayer from '../../Players/ActionCreators/EditExistingPlayer'
import ShowPlayerDetails from '../../Players/ActionCreators/ShowPlayerDetails'
import AttemptDisablePlayer from '../../Players/ActionCreators/AttemptDisablePlayer'
import EnablePlayer from '../../Players/ActionCreators/EnablePlayer'
import PlayerTableHeader from '../../Shared/Components/PlayersTable/PlayerTableHeader'
import PlayerTableBody from '../../Shared/Components/PlayersTable/PlayerTableBody'

const tableStyle = {
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    flex: -1
}

function mapPlayersToList(state) {
    return state.standings.players.map((id, index) => {
        const player = new Player(state.players[id])

        return {
            id: player.getId(),
            enabled: player.isEnabled(),
            name: player.renderName(),
            order: index + 1,
            stat: player.renderStatistic(state.standings.visibleStat)
        }
    })
}

function showPlayerOptions(dispatch, player) {
    const editButton    = { text: 'Edit', onPress: () => dispatch(EditExistingPlayer(player.id)) }
    const detailsButton = { text: 'Details', onPress: () => dispatch(ShowPlayerDetails(player.id)) }
    const suspendButton = player.enabled ?
        { text: 'Disable/Remove', onPress: () => dispatch(AttemptDisablePlayer(player.id)) } :
        { text: 'Enable',  onPress: () => dispatch(EnablePlayer(player.id)) }

    Alert.alert(
        '',
        player.name,
        [editButton, suspendButton, detailsButton]
    );
}

const mapStateToProps = (state) => ({
    players: mapPlayersToList(state),
    visibleStat: state.standings.visibleStat
})

const mapDispatchToProps = (dispatch) => ({
    onPlayerClick: (player) => dispatch(ShowPlayerDetails(player.id)),
    onPlayerLongClick: (player) => showPlayerOptions(dispatch, player)
})

function StandingsTable(props) {
    return (
        <View style={tableStyle}>
            <PlayerTableHeader
                visibleStat={props.visibleStat}
                onNameClick={() => {}}
                onNumberClick={() => {}}
                onStatClick={() => {}}
            />
            <PlayerTableBody
                players={props.players}
                onPlayerClick={props.onPlayerClick}
                onPlayerLongClick={props.onPlayerLongClick}
            />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(StandingsTable)

