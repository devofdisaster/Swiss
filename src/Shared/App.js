import React from 'react';
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import MainScreen from './Navigation/MainScreen'

class App extends React.Component {
    render() {
        return (
            <MainScreen navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })} />
        )
    }
}

export default NavigableApp = connect((state) => ({ nav: state.nav }))(App);
