import Statistic from '../Statistic'

export default class Results extends Statistic {
    static renderName() {
        return super.renderName('results')
    }

    constructor (value) {
        super('results', value)
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

    toString () {
        return [this._value.wins || 0, this._value.draws || 0, this._value.losses || 0].join('-')
    }
}
