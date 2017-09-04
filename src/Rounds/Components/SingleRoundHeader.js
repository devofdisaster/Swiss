import React from 'react'
import { Image, Text, TouchableNativeFeedback, View } from 'react-native'

const headerStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderWidth: 1,
    borderColor: 'grey',
    borderBottomWidth: 0,
    padding: 10,
    flex: -1
}
const background = TouchableNativeFeedback.SelectableBackgroundBorderless()
const useForeground = TouchableNativeFeedback.canUseNativeForeground()
const imageStyle = { width: 24, height: 24, marginLeft: 5, marginRight: 10 }
const buttonViewStyle = { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }

export default function SingleRoundHeader(props) {
    const source = props.finished ?
        require('material-design-icons/editor/drawable-hdpi/ic_mode_edit_black_24dp.png') :
        require('material-design-icons/action/drawable-hdpi/ic_done_black_24dp.png')

    const onClick = props.finished ? props.onEditClick : props.onFinishClick
    const label = props.finished ? 'Edit' : 'Confirm'

    return (
        <View style={headerStyle}>
            <TouchableNativeFeedback
                background={background}
                useForeground={useForeground}
                onPress={onClick}
            >
                <View style={buttonViewStyle}>
                    <Image
                        style={imageStyle}
                        source={source}
                    />
                    <Text>{label}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}
