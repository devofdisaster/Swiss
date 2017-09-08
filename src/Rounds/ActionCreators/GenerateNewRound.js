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
    const tournament = new Tournament(Object.values(state.players), state.rounds, Object.values(state.matches))
    const newRound = tournament.startNewRound()

    if (!newRound) {
        Alert.alert('Impossible!', `Can't generate a new round!`)

        return
    }

    dispatch(AddNewRound(getStateFromTournament(tournament)))
    dispatch(SwipeToRound(newRound.getIndex()))
}

function getStateFromTournament(tournament) {
    const matches = {}
    const players = {}

    tournament.getMatches().forEach((match) => {
        matches[match.getId()] = {
            id: match.getId(),
            player1: match.getPlayerOneId(),
            player2: match.getPlayerTwoId(),
            round: match.getRoundIndex(),
            result: match.getResultKey()
        }
    })

    tournament.getPlayers().forEach((player) => {
        players[player.getId()] = {
            id: player.getId(),
            firstname: player.getFirstname(),
            lastname: player.getLastname(),
            nickname: player.getNickname(),
            enabled: player.isEnabled(),
            order: player.getOriginalOrder(),
            matches: player.getMatchIds(),
            ...player.getPlainStats()
        }
    })

    return {
        matches,
        players,
        rounds: tournament.getRounds().map((round) => ({
            matches: round.getMatchIds(),
            index: round.getIndex(),
            finished: round.isFinished()
        }))
    }
}
