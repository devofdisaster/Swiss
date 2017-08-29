import Statistic from '../Statistic'

export default class Comparison extends Statistic {
    static renderName() {
        return super.renderName('comparison')
    }

    constructor(value) {
        super('comparison', value)
    }

    isLowerThan(otherValue) {
        if (this._value.plus < otherValue.plus) {
            return true
        }

        return this._value.minus > otherValue.minus
    }

    toString () {
        return `${this._value.plus || 0}/${this._value.minus || 0}`
    }
}
