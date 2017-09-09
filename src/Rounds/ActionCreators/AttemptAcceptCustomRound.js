import { Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'
import Tournament from '../../Shared/Domain/Tournament'
import AddNewRound from './AddNewRound'
import SwipeToRound from './SwipeToRound'

export default () => (dispatch, getState) => {
    const state = getState()

    if (roundIsInvalid(state)) {
        Alert.alert('Impossible!', 'Fill in all matches!')

        return
    }

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

    dispatch(AddNewRound(tournament.getNewRoundState()))
    dispatch(NavigationActions.back())
    dispatch(SwipeToRound(state.rounds.length))
}

function roundIsInvalid(state) {
    return matchesStillAvailable(state) || notEnoughSelectedMatches(state)
}

function matchesStillAvailable(state) {
    return !!state.customRound.available.length
}

function notEnoughSelectedMatches(state) {
    return state.customRound.selected.length * 2 < Object.values(state.players)
        .filter((player) => player.enabled)
        .length
}
