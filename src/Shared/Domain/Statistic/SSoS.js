import Statistic from '../Statistic'

export default class SSoS extends Statistic {
    static renderName() {
        return super.renderName('ssos')
    }

    constructor (value) {
        super('ssos', value)
    }

    toString() {
        return this._value.toFixed(3)
    }
}

