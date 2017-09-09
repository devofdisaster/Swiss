import { Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'
import AttemptFinishRound from './AttemptFinishRound'
import Tournament from '../../Shared/Domain/Tournament'
import UpdateCustomMatches from './UpdateCustomMatches'

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
    const available = tournament.determineAvailableMatches().map((match) => ({
        id: match.getId(),
        player1: match.getPlayerOneId(),
        player2: match.getPlayerTwoId(),
        result: match.getResultKey(),
        round: match.getRoundIndex()
    }))

    if (!available.length) {
        Alert.alert('Impossible!', `No available matches left!`)

        return
    }

    dispatch(UpdateCustomMatches(available))
    dispatch(NavigationActions.navigate({ routeName: 'CustomizeRound' }))
}
