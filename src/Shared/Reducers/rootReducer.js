import PlayersReducer from '../../Players/Reducers/PlayersReducer'
import PlayersListReducer from '../../Players/Reducers/PlayersListReducer'
import NavigationReducer from './NavigationReducer'
import InitialState from '../InitialState'

export default rootReducer = (state = InitialState, action) => ({
    nav: NavigationReducer(state.nav, action),
    players: PlayersReducer(state.players, action),
    playersList: PlayersListReducer(state.playersList, state.players, action),
    rounds: state.rounds
})
