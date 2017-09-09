import Tournament from '../../Shared/Domain/Tournament'
import UpdateCustomMatches from './UpdateCustomMatches'

export default (matchId) => (dispatch, getState) => {
    const state = getState()
    const selectedIndex = state.customRound.selected.findIndex((match) => match.id === matchId)
    const selected = [
        ...state.customRound.selected.slice(0, selectedIndex),
        ...state.customRound.selected.slice(selectedIndex + 1),
    ]

    const tournament = new Tournament(
        Object.values(state.players),
        state.rounds,
        Object.values(state.matches).concat(selected)
    )
    const available = tournament.determineAvailableMatches().map((match) => ({
        id: match.getId(),
        player1: match.getPlayerOneId(),
        player2: match.getPlayerTwoId(),
        result: match.getResultKey(),
        round: match.getRoundIndex()
    }))

    dispatch(UpdateCustomMatches(available, selected))
}


