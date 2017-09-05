import React from 'react'
import { TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import SingleRoundTable from './SingleRoundTable'
import {View} from 'react-native'
import RoundsHeader from './RoundsHeader'
import StartFirstRound from './StartFirstRoundView'
import GenerateNewRound from '../ActionCreators/GenerateNewRound'

const screenStyle = { display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch', flex: 1 }
const tabNavigatorConfig = {
    animationEnabled: true,
    backBehavior: 'none',
    lazy: true,
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'dimgray',
        indicatorStyle: { backgroundColor: 'black' },
        scrollEnabled: true,
        style: { backgroundColor: 'lightblue', borderTopWidth: 1, borderTopColor: 'black' },
        tabStyle: { width: 100 }
    },
    swipeEnabled: true
}


class RoundsScreen extends React.Component {
    render() {
        const ContentComponent = this.props.count ?
            TabNavigator(this.props.routes, tabNavigatorConfig) :
            StartFirstRound

        return (
            <View style={screenStyle}>
                <RoundsHeader/>
                <ContentComponent onPress={this.props.startNewRound}/>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.rounds.length,
        routes: state.rounds.reduce(
            (routes, round, index) => ({ ...routes, [index + 1]: { screen: SingleRoundTable } }),
            {}
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startNewRound: () => dispatch(GenerateNewRound())
})

export default connect(mapStateToProps, mapDispatchToProps)(RoundsScreen)
