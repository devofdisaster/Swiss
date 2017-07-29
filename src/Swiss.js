import React from 'react'
import { createStore } from 'redux'
import rootReducer from './Reducers/rootReducer'
import { Provider } from 'react-redux'
import NavigableApp from './Components/App'

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
