export default class Match {
    constructor(id, playerOne, playerTwo, round) {
        this._id = id
        this._playerOne = playerOne
        this._playerTwo = playerTwo
        this._round = round
    }

    getId() {
        return this._id
    }

    getResultKey() {
        return null
    }
}
