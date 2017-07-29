import React from 'react';
import MainScreen from './Nav/MainScreen';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

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
