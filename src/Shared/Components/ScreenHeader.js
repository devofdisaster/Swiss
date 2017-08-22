import React from 'react'
import { View, Text } from 'react-native'
import ScreenHeaderNavIcon from './ScreenHeader/ScreenHeaderNavIcon'
import ScreenHeaderMenu from './ScreenHeader/ScreenHeaderMenu'

const headerStyle = {
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'row',
    height: 56,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const titleStyle = {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
}

const childViewStyle = {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
}

export default function ScreenHeader(props) {
    return (
        <View style={ Object.assign({}, headerStyle, props.headerStyle || {}) }>
            <ScreenHeaderNavIcon
                image={require('material-design-icons/navigation/drawable-hdpi/ic_menu_black_24dp.png')}
                { ...props.navIcon }
            />
            <Text style={Object.assign(titleStyle, props.titleStyle)}>{ props.title }</Text>
            <View style={childViewStyle}>
                { props.children }
            </View>
            <ScreenHeaderMenu { ...props.menu }/>
        </View>
    )
}
