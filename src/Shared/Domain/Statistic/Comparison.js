import Statistic from '../Statistic'

export default class Comparison extends Statistic {
    static renderName() {
        return super.renderName('comparison')
    }

    constructor(value) {
        super('comparison', value)
    }

    getNegative() {
        return this._value.minus
    }

    getPositive() {
        return this._value.plus
    }

    isLowerThan(otherValue) {
        if (this.getPositive() === otherValue.getPositive()) {
            return this.getNegative() > otherValue.getNegative()
        }

        return this.getPositive() < otherValue.getPositive()
    }

    toString () {
        return `${this._value.plus || 0}/${this._value.minus || 0}`
    }
}
