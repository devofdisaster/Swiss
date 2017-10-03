import Tournament from '../Domain/Tournament'
import UpdateScores from '../../Players/ActionCreators/UpdateScores'
import RefreshStandings from '../../Standings/ActionCreators/RefreshStandings'
import RefreshPlayerList from '../../Players/ActionCreators/RefreshPlayerList'

export default () => (dispatch, getState) => {
    const state = getState()
    const tournament = new Tournament(Object.values(state.players), state.rounds, Object.values(state.matches))

    tournament.recalculateScores()

    dispatch(UpdateScores(tournament.getPlayerScoreState()))
    dispatch(RefreshPlayerList())
    dispatch(RefreshStandings())
}
