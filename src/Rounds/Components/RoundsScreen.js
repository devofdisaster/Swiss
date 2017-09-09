import React from 'react'
import { TabBarTop, TabNavigator } from 'react-navigation'
import { connect } from 'react-redux'
import SingleRoundTable from './SingleRoundTable'
import {View} from 'react-native'
import RoundsHeader from './RoundsHeader'
import StartFirstRound from './StartFirstRoundView'
import GenerateNewRound from '../ActionCreators/GenerateNewRound'

const screenStyle = { display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch', flex: 1 }
const tabNavigatorConfig = {
    animationEnabled: false,
    backBehavior: 'none',
    lazy: true,
    tabBarOptions: {
        activeTintColor: 'black',
        inactiveTintColor: 'dimgray',
        indicatorStyle: { backgroundColor: 'black' },
        scrollEnabled: true,
        style: { backgroundColor: 'lightblue', borderTopWidth: 1, borderTopColor: 'black' },
        tabStyle: { width: 75 }
    },
    swipeEnabled: true,
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top'
}

class RoundsScreen extends React.Component {
    render() {
        let ContentComponent = <StartFirstRound onPress={this.props.startNewRound} />

        if (this.props.count) {
            ContentComponent = TabNavigator(this.props.routes, tabNavigatorConfig)
            ContentComponent = <ContentComponent navigation={this.props.navigation} />
        }

        return (
            <View style={screenStyle}>
                <RoundsHeader/>
                { ContentComponent }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.rounds.length,
        routes: state.rounds.reduce(
            (routes, round, index) => ({
                ...routes,
                [`Round-${index + 1}`]: {
                    screen: SingleRoundTable,
                    navigationOptions: ({ navigation }) => ({ title: `${index + 1}` })
                }
            }),
            {}
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    startNewRound: () => dispatch(GenerateNewRound())
})

export default connect(mapStateToProps, mapDispatchToProps)(RoundsScreen)
