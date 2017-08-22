import React from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import ScreenHeader from '../../Shared/Components/ScreenHeader'
import PlayerStatPicker from './PlayerStatPicker'

const mapStateToProps = (state) => ({
    count: (state.players || []).length
})

const menu = {
    items: [
        {
            name: 'AddNewPlayer',
            icon: require('material-design-icons/social/drawable-hdpi/ic_person_add_black_24dp.png'),
        }
    ]
}

const mapDispatchToProps = (dispatch) => ({
    onNavIconPressed: () => dispatch(NavigationActions.navigate({ routeName: 'DrawerOpen' })),
    onStatPicked: () => {},
    menu: { items: menu.items.map((item) => Object.assign({}, item, {})) }
})

function PlayersHeader(props) {
    return <ScreenHeader
        navIcon={{ onPress: props.onNavIconPressed }}
        title={props.count ? `Players: ${props.count}` : 'Players'}
        menu={props.menu}
    >
        <PlayerStatPicker
            onChange={props.onStatPicked}
        />
    </ScreenHeader>
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersHeader)
