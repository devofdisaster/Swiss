import React from 'react'
import { connect } from 'react-redux'
import ScreenHeader from '../../Shared/Components/ScreenHeader'
import PlayerStatPicker from '../../Shared/Components/PlayerStatPicker'
import ChangeDisplayedStandingsStat from '../ActionCreators/ChangeDisplayedStandingsStat'
import OpenDrawer from '../../Shared/ActionCreators/OpenDrawer'

const mapStateToProps = (state) => ({
    selected: state.playersList.visibleStat
})

const mapDispatchToProps = (dispatch) => ({
    onNavIconPressed: () => dispatch(OpenDrawer()),
    onStatPicked: (stat) => dispatch(ChangeDisplayedStandingsStat(stat)),
})

function StandingsHeader(props) {
    return <ScreenHeader
        navIcon={{ onPress: props.onNavIconPressed }}
        title="Standings"
    >
        <PlayerStatPicker
            onChange={props.onStatPicked}
            selected={props.selected}
        />
    </ScreenHeader>
}

export default connect(mapStateToProps, mapDispatchToProps)(StandingsHeader)
