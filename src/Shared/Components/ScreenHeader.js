import React from 'react'
import { ToolbarAndroid, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'lightblue',
        display: 'flex',
        flexDirection: 'row',
        height: 56,
        alignSelf: 'stretch',
        alignContent: 'flex-end',
    }
})

export default function ScreenHeader(props) {
    return (
        <ToolbarAndroid
            navIcon={require('material-design-icons/navigation/drawable-hdpi/ic_menu_black_24dp.png')}
            style={styles.header}
            {...props}
        >
            { props.children }
        </ToolbarAndroid>
    )
}
