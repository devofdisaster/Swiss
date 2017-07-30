import { combineReducers } from 'redux'
import MainScreen from './Navigation/MainScreen';

const initialState = MainScreen.router.getStateForAction(MainScreen.router.getActionForPathAndParams('attendees'))

export default rootReducer = combineReducers({
    nav: (state = initialState, action) => MainScreen.router.getStateForAction(action, state) || state
})
