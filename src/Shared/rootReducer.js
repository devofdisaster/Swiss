import { combineReducers } from 'redux'
import players from '../Players/Reducers/PlayersReducer'
import newPlayer from '../Players/Reducers/NewPlayerReducer'
import nav from '../Shared/Reducers/NavigationReducer'

export default rootReducer = combineReducers({
    nav,
    players,
    newPlayer
})
