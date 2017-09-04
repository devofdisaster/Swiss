import PlayersReducer from '../../Players/Reducers/PlayersReducer'
import PlayersListReducer from '../../Players/Reducers/PlayersListReducer'
import NavigationReducer from './NavigationReducer'
import InitialState from '../InitialState'
import MatchesReducer from '../../Rounds/Reducers/MatchesReducer'
import RoundsReducer from '../../Rounds/Reducers/RoundsReducer'

export default rootReducer = (state = InitialState, action) => ({
    matches: MatchesReducer(state.matches, action),
    nav: NavigationReducer(state.nav, action),
    players: PlayersReducer(state.players, action),
    playersList: PlayersListReducer(state.playersList, state.players, action),
    rounds: RoundsReducer(state.rounds, action)
})
