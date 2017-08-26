import { combineReducers } from 'redux'
import players from '../../Players/Reducers/PlayersReducer'
import playersList from '../../Players/Reducers/PlayersListReducer'
import nav from './NavigationReducer'

export default rootReducer = combineReducers({
    nav,
    players,
    playersList
})
