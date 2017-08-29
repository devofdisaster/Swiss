import React from 'react'
import {ListView, Text, View} from 'react-native'

const viewStyle = { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }
const cellStyle = {
    borderWidth: 1,
    borderColor: 'grey',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5
}
const numberStyle = { width: '10%' }
const nameStyle = { width: '65%', fontSize: 14 }
const statStyle = { width: '25%' }

function renderPlayer(player, sectionId) {
    return <View style={viewStyle}>
        <Text style={{...cellStyle, ...numberStyle}}>{player.order}</Text>
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
                initialListSize={16}
                renderRow={renderPlayer}
                scrollRenderAheadDistance={100}
            />
        )
    }
}
