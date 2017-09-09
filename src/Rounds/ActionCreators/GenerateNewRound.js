import Tournament from '../../Shared/Domain/Tournament'
import { Alert } from 'react-native'
import AddNewRound from './AddNewRound'
import AttemptFinishRound from './AttemptFinishRound'
import SwipeToRound from './SwipeToRound'

export default () => (dispatch, getState) => {
    const existingRounds = getState().rounds.length

    if (existingRounds && !dispatch(AttemptFinishRound(existingRounds - 1))) {
        return false;
    }

    const state = getState()
    const notEnoughPlayers = Object.keys(state.players).length < 4

    if (notEnoughPlayers) {
        Alert.alert('Impossible!', 'At least 4 players required!')

        return
    }

    const tournament = new Tournament(Object.values(state.players), state.rounds, Object.values(state.matches))
    const newRound = tournament.startNewRound()

    if (!newRound) {
        Alert.alert('Impossible!', `Can't generate a new round!`)

        return
    }

    dispatch(AddNewRound(tournament.getNewRoundState()))
    dispatch(SwipeToRound(newRound.getIndex()))
}
