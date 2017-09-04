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

const background = TouchableNativeFeedback.Ripple('black', true);

export default function ScreenHeaderMenu(props) {
    const style = Object.assign(viewStyle, props.style || {})

    return (
        <View style={style}>
            { props.items && props.items.map(renderItem) }
        </View>
    )
}

function renderItem(item) {
    const itemStyle = Object.assign({ width: 36, height: 36, marginLeft: 5, marginRight: 5 }, item.style || {})

    return (
        <TouchableNativeFeedback
            background={background}
            useForeground={TouchableNativeFeedback.canUseNativeForeground()}
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

