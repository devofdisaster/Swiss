import Statistic from '../Statistic'

export default class Games extends Statistic {
    static renderName() {
        return super.renderName('games')
    }

    constructor (value) {
        super('games', value)
    }

    increment() {
        this._value++
    }
}

