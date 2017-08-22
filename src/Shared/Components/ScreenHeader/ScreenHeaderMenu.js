import React from 'react'
import { View, Image, TouchableNativeFeedback } from 'react-native'

const viewStyle = {
    height: 56,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5
}

const background = TouchableNativeFeedback.Ripple('black', true);

export default function ScreenHeaderMenu(props) {
    const style = Object.assign(viewStyle, props.style || {})

    return (
        <View style={style}>
            { props.items.map(renderItem) }
        </View>
    )
}

function renderItem(item) {
    const itemStyle = Object.assign({ width: 36, height: 36, marginLeft: 5, marginRight: 5 }, item.style || {})
    const itemImage = item.image || require('material-design-icons/social/drawable-hdpi/ic_person_add_black_24dp.png')

    return (
        <TouchableNativeFeedback
            background={background}
            useForeground={TouchableNativeFeedback.canUseNativeForeground()}
            onPress={item.onPress}
            key={item.name}
        >
            <View>
                <Image
                    source={itemImage}
                    style={itemStyle}
                />
            </View>
        </TouchableNativeFeedback>
    )
}

