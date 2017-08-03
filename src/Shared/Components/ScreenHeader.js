import React from 'react'
import { ToolbarAndroid } from 'react-native'

export default function ScreenHeader(props) {
    return (
        <ToolbarAndroid
            navIcon={require('material-design-icons/navigation/drawable-hdpi/ic_menu_black_24dp.png')}
            style={{backgroundColor: 'lightblue', height: 56, alignSelf: 'stretch', justifyContent: 'center'}}
            {...props}
        />
    )
}
