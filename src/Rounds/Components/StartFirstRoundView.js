import React from 'react'
import { Image, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'

const style = StyleSheet.create({
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#000',
        fontSize: 36,
        marginLeft: 20
    }
})
const icon = require('material-design-icons/content/drawable-hdpi/ic_add_circle_outline_black_36dp.png')
const background = TouchableNativeFeedback.SelectableBackgroundBorderless()
const useForeground = TouchableNativeFeedback.canUseNativeForeground()

export default function StartFirstRound(props) {
    return (
        <View style={style.body}>
            <TouchableNativeFeedback
                background={background}
                useForeground={useForeground}
                onPress={props.onPress}
            >
                <View style={style.button}>
                    <Image source={icon}/>
                    <Text style={style.text}>Start first round</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}
