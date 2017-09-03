import React from 'react'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import SingleRoundTab from './SingleRoundTab'

const tabNavigatorConfig = {
    animationEnabled: true,
    backBehavior: 'none',
    lazy: true,
    tabBarOptions: {
        scrollEnabled: true,
    },
    swipeEnabled: true
}

class RoundsScreen extends React.Component {
    render() {
        const RoundTabs = TabNavigator(this.props.routes, tabNavigatorConfig);

        return (
            <RoundTabs/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        routes: {
            Round1: { screen: SingleRoundTab },
            Round2: { screen: SingleRoundTab }
        }
    }
}
const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(RoundsScreen)
