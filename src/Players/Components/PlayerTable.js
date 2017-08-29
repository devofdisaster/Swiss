import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PlayerTableHeader from './PlayerTableHeader'
import PlayerTableBody from './PlayerTableBody'
import Player from '../../Shared/Domain/Player'
import SortByPlayerName from '../ActionsCreators/SortByPlayerName'
import SortByPlayerOrder from '../ActionsCreators/SortByPlayerOrder'
import SortByStatistic from '../ActionsCreators/SortByStatistic'

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
            />
        </View>
    )
}

const mapStateToProps = (state) => ({
    players: mapPlayersToList(state),
    visibleStat: state.playersList.visibleStat
})

const mapDispatchToProps = (dispatch) => ({
    onNameClick: () => dispatch(SortByPlayerName()),
    onNumberClick: () => dispatch(SortByPlayerOrder()),
    onStatClick: () => dispatch(SortByStatistic())
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTable)

function mapPlayersToList(state) {
    return state.playersList.players.map((id) => {
        const player = new Player(state.players[id])

        return {
            id: player.id,
            name: player.renderName(),
            order: player.getOriginalOrder() + 1,
            stat: player.renderStatistic(state.playersList.visibleStat)
        }
    })
}
