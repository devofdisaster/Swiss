import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Shared/rootReducer'
import NavigableApp from './Shared/App'

const store = createStore(rootReducer)

export default class Swiss extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <NavigableApp />
            </Provider>
        );
    }
}
