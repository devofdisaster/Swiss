import Statistic from '../Statistic'

export default class Comparison extends Statistic {
    static renderName() {
        return super.renderName('comparison')
    }

    constructor(value) {
        super('comparison', {...value})
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

    isEqualTo(otherValue) {
        return this.getPositive() === otherValue.getPositive() && this.getNegative() === otherValue.getNegative()
    }

    toString () {
        return `${this._value.plus || 0}/${this._value.minus || 0}`
    }

    addPositive(value) {
        this._value.plus += value
    }

    addNegative(value) {
        this._value.minus += value
    }
}
