import Statistic from '../Statistic'

export default class SoS extends Statistic {
    static renderName() {
        return super.renderName('sos')
    }

    constructor (value) {
        super('sos', value)
    }

    toString() {
        return this._value.toFixed(3)
    }
}
