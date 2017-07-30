import React from 'react';
import { BackHandler } from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import MainScreen from './Navigation/MainScreen'

class App extends React.Component {
    shouldCloseApp(nav) {
        return nav.index === 0
    }

    componentDidMount() {
        BackHandler.addEventListener('backPress', () => {
            const { dispatch, nav } = this.props

            if (this.shouldCloseApp(nav)) {
                return false
            }

            dispatch({ type: 'Navigation/BACK' })
            return true
        })
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('backPress')
    }

    render() {
        return (
            <MainScreen navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })} />
        )
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
}

export default NavigableApp = connect((state) => ({ nav: state.nav }))(App);
