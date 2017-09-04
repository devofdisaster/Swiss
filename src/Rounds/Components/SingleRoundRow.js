import React from 'react'
import { View, Text } from 'react-native'
import MatchResultPicker from './MatchResultPicker'

const matchStyle = {
    flex: -1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch'
}

const nameStyle = {
    textAlign: 'center',
    width: '40%',
    borderWidth: 1,
    borderColor: 'grey'
}

export default function SingleRoundRow(props) {
    return (
        <View style={{...matchStyle, ...props.style}}>
            <Text style={nameStyle}>{props.player1name}</Text>
            <MatchResultPicker
                onChange={(result) => props.onResultChange && props.onResultChange(props.id, result)}
                selected={props.selectedResult}
            />
            <Text style={nameStyle}>{props.player2name}</Text>
        </View>
    )
}
