import Statistic from '../Statistic'

export default class SSoS extends Statistic {
    static renderName() {
        return super.renderName('ssos')
    }

    constructor (value) {
        super('ssos', value)
    }
}

