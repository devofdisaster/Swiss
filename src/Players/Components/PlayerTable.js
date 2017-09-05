import React from 'react'
import { View, Alert } from 'react-native'
import { connect } from 'react-redux'
import PlayerTableHeader from './PlayerTableHeader'
import PlayerTableBody from './PlayerTableBody'
import Player from '../../Shared/Domain/Player'
import SortByPlayerName from '../ActionsCreators/SortByPlayerName'
import SortByPlayerOrder from '../ActionsCreators/SortByPlayerOrder'
import SortByStatistic from '../ActionsCreators/SortByStatistic'
import DisablePlayer from '../ActionsCreators/DisablePlayer'
import EnablePlayer from '../ActionsCreators/EnablePlayer'
import EditExistingPlayer from '../ActionsCreators/EditExistingPlayer'
import ShowPlayerDetails from '../ActionsCreators/ShowPlayerDetails'
import AttemptDisablePlayer from '../ActionsCreators/AttemptDisablePlayer'

const tableStyle = {
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    flex: -1
}
const headerStyle = {
    borderWidth: 1,
    borderColor: 'grey',
    borderBottomWidth: 0
}
const bodyStyle = {
    borderWidth: 1,
    borderColor: 'grey',
    borderTopWidth: 0,
    flexShrink: 1
}

function mapPlayersToList(state) {
    return state.playersList.players.map((id) => {
        const player = new Player(state.players[id])

        return {
            id: player.getId(),
            enabled: player.isEnabled(),
            name: player.renderName(),
            order: player.getOriginalOrder() + 1,
            stat: player.renderStatistic(state.playersList.visibleStat)
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
    visibleStat: state.playersList.visibleStat
})

const mapDispatchToProps = (dispatch) => ({
    onNameClick: () => dispatch(SortByPlayerName()),
    onNumberClick: () => dispatch(SortByPlayerOrder()),
    onStatClick: () => dispatch(SortByStatistic()),
    onPlayerClick: (player) => dispatch(ShowPlayerDetails(player.id)),
    onPlayerLongClick: (player) => showPlayerOptions(dispatch, player)
})

function PlayerTable(props) {
    return (
        <View style={tableStyle}>
            <PlayerTableHeader
                style={headerStyle}
                visibleStat={props.visibleStat}
                onNameClick={props.onNameClick}
                onNumberClick={props.onNumberClick}
                onStatClick={props.onStatClick}
            />
            <PlayerTableBody
                players={props.players}
                style={bodyStyle}
                onPlayerClick={props.onPlayerClick}
                onPlayerLongClick={props.onPlayerLongClick}
            />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTable)
