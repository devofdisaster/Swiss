import { Alert } from 'react-native'
import Tournament from '../../Shared/Domain/Tournament'
import UpdateCustomMatches from './UpdateCustomMatches'

export default () => (dispatch, getState) => {
    const state = getState()
    const selectedMatches = state.customRound.selected
    const tournament = new Tournament(
        Object.values(state.players),
        state.rounds,
        Object.values(state.matches)
    )

    let newRound = tournament.generateRoundWithMatches(selectedMatches)

    if (!newRound) {
        Alert.alert('Impossible!', `Can't generate a new round!`)

        return
    }

    dispatch(UpdateCustomMatches(
        [],
        newRound.getMatches().map((match) => ({
            id: match.getId(),
            player1: match.getPlayerOneId(),
            player2: match.getPlayerTwoId(),
            result: match.getResultKey(),
            round: match.getRoundIndex()
        }))
    ))
}
