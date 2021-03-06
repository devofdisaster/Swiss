import Statistic from '../Statistic'

export default class Results extends Statistic {
    static PLAYER_1_WIN = '1-0'
    static PLAYER_2_WIN = '0-1'
    static DRAW         = '0-0'
    static BYE          = '1-0'

    static renderName() {
        return super.renderName('results')
    }

    constructor (value) {
        super('results', {...value})
    }

    getDraws() {
        return this._value.draws
    }

    getLosses() {
        return this._value.losses
    }

    getWins() {
        return this._value.wins
    }

    isLowerThan(otherResults) {
        if (this._value.wins === otherResults.getWins()) {
            return this._value.losses > otherResults.getLosses()
        }

        return this._value.wins < otherResults.getWins()
    }

    isEqualTo(otherResults) {
        return this._value.wins === otherResults.getWins() && this._value.losses === otherResults.getLosses()
    }

    toString () {
        return [this._value.wins || 0, this._value.draws || 0, this._value.losses || 0].join('-')
    }

    addWins(value) {
        this._value.wins += value
    }

    addDraws(value) {
        this._value.draws += value
    }

    addLosses(value) {
        this._value.losses += value
    }
}
