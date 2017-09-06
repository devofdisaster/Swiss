import Statistic from '../Statistic'

export default class Points extends Statistic {
    static renderName() {
        return super.renderName('points')
    }

    constructor (value) {
        super('points', value)
    }

    add(points) {
        this._value += points
    }
}

