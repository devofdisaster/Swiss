export default class Match {
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
}
