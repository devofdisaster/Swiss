import PlayersReducer from '../../Players/Reducers/PlayersReducer'
import PlayersListReducer from '../../Players/Reducers/PlayersListReducer'
import NavigationReducer from './NavigationReducer'
import InitialState from '../InitialState'
import MatchesReducer from '../../Rounds/Reducers/MatchesReducer'
import RoundsReducer from '../../Rounds/Reducers/RoundsReducer'
import TournamentReducer from '../../Tournament/Reducers/TournamentReducer'
import CustomRoundReducer from '../../Rounds/Reducers/CustomRoundReducer'

export default rootReducer = (state = InitialState, action) => ({
    matches: MatchesReducer(state.matches, action),
    nav: NavigationReducer(state.nav, state.rounds, action),
    players: PlayersReducer(state.players, action),
    playersList: PlayersListReducer(state.playersList, state.players, action),
    rounds: RoundsReducer(state.rounds, action),
    customRound: CustomRoundReducer(state.customRound, action),
    tournament: TournamentReducer(state.tournament, action)
})
