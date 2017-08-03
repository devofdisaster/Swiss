import React from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import ScreenHeader from '../../Shared/Components/ScreenHeader'

const mapStateToProps = (state) => ({
    count: (state.players || []).length
})

const mapDispatchToProps = (dispatch) => ({
    onIconClicked: () => dispatch(NavigationActions.navigate({ routeName: 'DrawerOpen' }))
})

function AttendeesHeader(props) {
    return <ScreenHeader
        title={props.count ? `Players: ${props.count}` : 'Players'}
        actions={[{'title': 'blah', 'show': 'ifRoom'}]}
        onIconClicked={props.onIconClicked}
    />
}

export default connect(mapStateToProps, mapDispatchToProps)(AttendeesHeader)
