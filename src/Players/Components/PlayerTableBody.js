import React from 'react'
import { ListView } from 'react-native'
import PlayerTableRow from './PlayerTableRow'

function rowHasChanged(prev, next) {
    return Object.getOwnPropertyNames(prev).reduce(
        (carry, prop) => carry || prev[prop] !== next[prop],
        false
    )
}

export default class PlayerTableBody extends React.Component {
    constructor(props) {
        super(props)

        this.dataSource = new ListView.DataSource({ rowHasChanged })
        this.renderRow = this.renderRow.bind(this)
    }

    renderRow(player) {
        return <PlayerTableRow
            player={player}
            onPlayerLongClick={this.props.onPlayerLongClick}
        />
    }

    render() {
        return (
            <ListView
                style={this.props.style}
                dataSource={this.dataSource.cloneWithRows(this.props.players, null)}
                initialListSize={16}
                renderRow={this.renderRow}
                scrollRenderAheadDistance={100}
            />
        )
    }
}
