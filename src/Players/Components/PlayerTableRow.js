import React from 'react'
import { Text, TouchableNativeFeedback, View } from 'react-native'

const cellTouchBackground = TouchableNativeFeedback.SelectableBackground()
const canUseForeground = TouchableNativeFeedback.canUseNativeForeground()
const numberStyle = { width: '10%' }
const nameStyle = { width: '65%', fontSize: 14 }
const statStyle = { width: '25%' }
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

export default function PlayerTableRow(props) {
    const backgroundStyle = props.player.enabled ? {} : { backgroundColor: 'orangered' }

    return (
        <TouchableNativeFeedback
            background={cellTouchBackground}
            useForeground={canUseForeground}
            onPress={() => props.onPlayerClick(props.player)}
            onLongPress={() => props.onPlayerLongClick(props.player)}
        >
            <View style={{...viewStyle, ...backgroundStyle}}>
                <Text style={{...cellStyle, ...numberStyle}}>{props.player.order}</Text>
                <Text style={{...cellStyle, ...nameStyle}}>{props.player.name}</Text>
                <Text style={{...cellStyle, ...statStyle}}>{props.player.stat}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}
