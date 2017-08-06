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
    onStatPicked: () => {}
})

function PlayersHeader(props) {
    return <ScreenHeader
        title={props.count ? `Players: ${props.count}` : 'Players'}
        actions={[{'title': 'blah', 'show': 'ifRoom'}]}
        onIconClicked={props.onIconClicked}
    >
        <PlayerStatPicker
            onChange={props.onStatPicked}
        />
    </ScreenHeader>
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersHeader)
