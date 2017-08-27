import Statistic from '../Statistic'

export default class Comparison extends Statistic {
    static renderName() {
        return super.renderName('comparison')
    }

    constructor (value) {
        super('comparison', value)
    }

    toString () {
        return `${this.value.plus || 0}/${this.value.minus || 0}`
    }
}
