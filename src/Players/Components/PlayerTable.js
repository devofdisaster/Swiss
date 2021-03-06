import React from 'react'
import { View, Alert } from 'react-native'
import { connect } from 'react-redux'
import PlayerTableHeader from '../../Shared/Components/PlayersTable/PlayerTableHeader'
import PlayerTableBody from '../../Shared/Components/PlayersTable/PlayerTableBody'
import Player from '../../Shared/Domain/Player'
import SortByPlayerName from '../ActionCreators/SortByPlayerName'
import SortByPlayerOrder from '../ActionCreators/SortByPlayerOrder'
import SortByStatistic from '../ActionCreators/SortByStatistic'
import EnablePlayer from '../ActionCreators/EnablePlayer'
import EditExistingPlayer from '../ActionCreators/EditExistingPlayer'
import ShowPlayerDetails from '../ActionCreators/ShowPlayerDetails'
import AttemptDisablePlayer from '../ActionCreators/AttemptDisablePlayer'

const tableStyle = {
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    flex: -1
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
                visibleStat={props.visibleStat}
                onNameClick={props.onNameClick}
                onNumberClick={props.onNumberClick}
                onStatClick={props.onStatClick}
            />
            <PlayerTableBody
                players={props.players}
                onPlayerClick={props.onPlayerClick}
                onPlayerLongClick={props.onPlayerLongClick}
            />
        </View>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTable)
