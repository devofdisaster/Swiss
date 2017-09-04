import React from 'react'
import { ListView } from 'react-native'
import SingleRoundRow from './SingleRoundRow'

const bodyStyle = { borderWidth: 1, borderColor: 'grey', borderTopWidth: 0, flexShrink: 1 }

function rowHasChanged(prev, next) {
    return Object.getOwnPropertyNames(prev).reduce(
        (carry, prop) => carry || prev[prop] !== next[prop],
        false
    )
}

export default class SingleRoundBody extends React.Component {
    constructor(props) {
        super(props)

        this.dataSource = new ListView.DataSource({ rowHasChanged })
        this.renderRow = this.renderRow.bind(this)
    }

    renderRow(match) {
        return (
            <SingleRoundRow
                selectedResult={null}
                onResultChange={this.props.onResultChange}
                {...match}
            />
        )
    }

    render() {
        return (
            <ListView
                style={bodyStyle}
                dataSource={this.dataSource.cloneWithRows(this.props.matches, null)}
                initialListSize={8}
                renderRow={this.renderRow}
                scrollRenderAheadDistance={100}
            />
        )
    }
}

