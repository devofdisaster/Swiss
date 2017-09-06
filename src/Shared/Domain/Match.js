import uuid from 'uuid'
import Results from './Statistic/Results'

export default class Match {
    static bye(player, round) {
        return new Match(uuid(), player, null, round, Results.PLAYER_1_WIN)
    }

    static withPlayers(player1, player2, round) {
        return new Match(uuid(), player1, player2, round, null)
    }

    constructor(id, playerOne, playerTwo, round, result) {
        this._id = id
        this._playerOne = playerOne
        this._playerTwo = playerTwo
        this._round = round
        this._result = result

        playerOne.addMatch(this)

        if (playerTwo) {
            playerTwo.addMatch(this)
        }
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

    getOpponentTo(player) {
        if (this.getPlayerOneId() === player.getId()) {
            return this._playerTwo
        } else if (this.getPlayerTwoId() === player.getId()) {
            return this._playerOne
        }
    }

    getPointsForPlayer(player) {
        if (!this.hasResult()) {
            return 0
        }

        const [ player1points, player2points ] = this._result.split('-')

        if (this.getPlayerOneId() === player.getId()) {
            return parseInt(player1points, 10)
        }

        if (this.getPlayerTwoId() === player.getId()) {
            return parseInt(player2points, 10)
        }

        throw new Error(`Given payer ain't in this match!`)
    }

    wasPlayerOneWin() {
        return this._result === Results.PLAYER_1_WIN || this._result === Results.BYE
    }

    wasPlayerTwoWin() {
        return this._result === Results.PLAYER_2_WIN
    }

    wasPlayerOneLoss() {
        return this._result === Results.PLAYER_2_WIN
    }

    wasPlayerTwoLoss() {
        return this._result === Results.PLAYER_1_WIN
    }

    wasDraw() {
        return this._result === Results.DRAW
    }

    addSimpleStatsToPlayerScores() {
        const p1points = this.getPointsForPlayer(this._playerOne)
        const p2points = this._playerTwo ? this.getPointsForPlayer(this._playerTwo) : 0

        this._playerOne.incrementGamesPlayed()
        this._playerOne.addPoints(p1points)
        this._playerOne.addComparison(p1points, p2points)
        this._playerOne.addResults(this.wasPlayerOneWin(), this.wasDraw(), this.wasPlayerOneLoss())

        if (this._playerTwo) {
            this._playerTwo.incrementGamesPlayed()
            this._playerTwo.addPoints(p2points)
            this._playerTwo.addComparison(p2points, p1points)
            this._playerTwo.addResults(this.wasPlayerTwoWin(),  this.wasDraw(), this.wasPlayerTwoLoss())
        }
    }
}
