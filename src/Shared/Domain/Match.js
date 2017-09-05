import uuid from 'uuid'
import Results from './Statistic/Results'

export default class Match {
    static bye(player, round) {
        const match = new Match(uuid(), player, null, round, Results.PLAYER_1_WIN)

        player.addMatch(match)

        return match
    }

    static withPlayers(player1, player2, round) {
        const match = new Match(uuid(), player1, player2, round, null)

        player1.addMatch(match)
        player2.addMatch(match)

        return match
    }

    constructor(id, playerOne, playerTwo, round, result) {
        this._id = id
        this._playerOne = playerOne
        this._playerTwo = playerTwo
        this._round = round
        this._result = result
    }

    getId() {
        return this._id
    }

    getResultKey() {
        return this._result
    }

    hasResult() {
        return this._result !== null
    }

    getPlayerOneId() {
        return this._playerOne ? this._playerOne.getId() : null
    }

    getPlayerTwoId() {
        return this._playerTwo ? this._playerTwo.getId() : null
    }

    getRoundIndex() {
        return this._round
    }

    hasPlayer(player) {
        if (player !== null) {
            return this.getPlayerOneId() === player.getId() || this.getPlayerTwoId() === player.getId()
        }

        return this.getPlayerTwoId() === null
    }
}
