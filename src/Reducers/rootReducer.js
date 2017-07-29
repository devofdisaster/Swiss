import { combineReducers } from 'redux'
import MainScreen from '../Components/Nav/MainScreen';

const initialState = MainScreen.router.getStateForAction(MainScreen.router.getActionForPathAndParams('registration'))

export default rootReducer = combineReducers({
    nav: (state = initialState, action) => MainScreen.router.getStateForAction(action, state) || state
})
