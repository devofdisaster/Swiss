import React from 'react'
import {Text, TouchableNativeFeedback, View} from 'react-native'

const touchableBackground = TouchableNativeFeedback.Ripple('black', true)
const useForeground = TouchableNativeFeedback.canUseNativeForeground()
const textStyle = { fontSize: 18, fontWeight: 'bold', textAlign: 'center' }
const viewStyle = {
    borderWidth: 1,
    borderColor: 'grey',
    paddingTop: 5,
    paddingBottom: 5,
    overflow: 'hidden'
}

export default function PlayerTableHeaderCell(props) {
    return (
        <TouchableNativeFeedback
            background={touchableBackground}
            useForeground={useForeground}
            onPress={props.onClick}
        >
            <View style={{...viewStyle, ...props.cellStyle}}>
                <Text style={{...textStyle, ...props.textStyle}}>{props.label}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}
