import React from 'react'
import {ListView, Text, View} from 'react-native'

const viewStyle = { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
const cellStyle = { borderWidth: 1, borderColor: 'grey', height: '100%', textAlign: 'center', overflow: 'hidden' }
const numberStyle = { width: '10%' }
const nameStyle = { width: '65%' }
const statStyle = { width: '25%' }


function renderPlayer(player, sectionId, rowId) {
    return <View style={viewStyle}>
        <Text style={{...cellStyle, ...numberStyle}}>{rowId*1 + 1}</Text>
        <Text style={{...cellStyle, ...nameStyle}}>{player.name}</Text>
        <Text style={{...cellStyle, ...statStyle}}>{player.stat}</Text>
    </View>
}

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
    }

    render() {
        return (
            <ListView
                style={this.props.style}
                dataSource={this.dataSource.cloneWithRows(this.props.players)}
                initialListSize={6}
                renderRow={renderPlayer}
                scrollRenderAheadDistance={50}
            />
        )
    }
}
