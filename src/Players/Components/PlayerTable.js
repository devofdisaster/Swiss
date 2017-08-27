import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PlayerTableHeader from './PlayerTableHeader'
import PlayerTableBody from './PlayerTableBody'
import Player from '../../Shared/Domain/Player'

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

})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTable)

function mapPlayersToList(state) {
    const players = state.players
    const order = state.playersList.players
    const statToDisplay = state.playersList.visibleStat

    return order.map((id) => {
        const player = new Player(players[id])

        return {
            name: player.renderName(),
            stat: player.renderStatistic(statToDisplay)
        }
    })
}
