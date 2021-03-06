import React from 'react'
import {View, Image, Text, TouchableNativeFeedback} from 'react-native'

const viewStyle = {
    height: 56,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
}

const itemViewStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}

const itemTitleStyle = {
    color: 'black',
    fontSize: 16
}

const imageStyle = { height: 36, resizeMode: 'contain', width: 36, marginLeft: 5, marginRight: 5 }
const background = TouchableNativeFeedback.SelectableBackgroundBorderless();
const canUseForeground = TouchableNativeFeedback.canUseNativeForeground()

export default function ScreenHeaderMenu(props) {
    const style = Object.assign(viewStyle, props.style || {})

    return (
        <View style={style}>
            { props.items && props.items.map(renderItem) }
        </View>
    )
}

function renderItem(item) {
    const itemStyle = Object.assign(imageStyle, item.style || {})

    return (
        <TouchableNativeFeedback
            background={background}
            useForeground={canUseForeground}
            onPress={item.onPress}
            onLongPress={item.onLongPress || (() => {})}
            key={item.name}
        >
            <View style={itemViewStyle}>
                { item.title && <Text style={itemTitleStyle}>{item.title}</Text> }
                <Image
                    source={item.image}
                    style={itemStyle}
                />
            </View>
        </TouchableNativeFeedback>
    )
}

