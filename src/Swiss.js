import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './Shared/Reducers/rootReducer'
import NavigableApp from './Shared/App'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default class Swiss extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <NavigableApp />
            </Provider>
        );
    }
}
