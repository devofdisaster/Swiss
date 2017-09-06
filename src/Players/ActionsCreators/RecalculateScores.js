import Tournament from '../../Shared/Domain/Tournament'
import UpdateScores from './UpdateScores'

export default () => (dispatch, getState) => {
    const state = getState()
    const tournament = new Tournament(Object.values(state.players), state.rounds, Object.values(state.matches))

    tournament.recalculateScores()

    dispatch(UpdateScores(tournament.getPlayerScoreState()))
}
