import React from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import ScreenHeader from '../../Shared/Components/ScreenHeader'
import PlayerStatPicker from './PlayerStatPicker'

const mapStateToProps = (state) => ({
    count: (state.players || []).length
})

const mapDispatchToProps = (dispatch) => ({
    onIconClicked: () => dispatch(NavigationActions.navigate({ routeName: 'DrawerOpen' })),
    onActionSelected: () => {},
    onStatPicked: () => {}
})

const actions = [
    {
        title: 'AddNewPlayer',
        icon: require('material-design-icons/social/drawable-hdpi/ic_person_add_black_24dp.png'),
        show: 'always',
        showWithText: false
    }
]

function PlayersHeader(props) {
    return <ScreenHeader
        title={props.count ? `Players: ${props.count}` : 'Players'}
        actions={actions}
        onIconClicked={props.onIconClicked}
        onActionSelected={props.onActionSelected}
    >
        <PlayerStatPicker
            onChange={props.onStatPicked}
        />
    </ScreenHeader>
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersHeader)
