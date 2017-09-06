export default class Tournament {
    constructor (players, rounds, matches) {
        this.players = players
        this.rounds = rounds
        this.matches = matches
    }

    recalculateScores() {

    }

    getPlayerScoreState() {
        return {
            [this.players[0].id]: { points: 77 }
        }
    }
}

