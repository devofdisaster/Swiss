import React from 'react'
import { View, TouchableNativeFeedback, Image } from 'react-native'

const background = TouchableNativeFeedback.Ripple('black', true)

export default function ScreenHeaderNavIcon(props) {
    const style = Object.assign({ width: 36, height: 36, marginLeft: 5, marginRight: 5 }, props.style || {})

    return (
        <TouchableNativeFeedback
            background={background}
            useForeground={TouchableNativeFeedback.canUseNativeForeground()}
            onPress={props.onPress}
        >
            <View>
                <Image source={props.image} style={style}/>
            </View>
        </TouchableNativeFeedback>
    )
}

