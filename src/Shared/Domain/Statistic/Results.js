import Statistic from '../Statistic'

export default class Results extends Statistic {
    static renderName() {
        return super.renderName('results')
    }

    constructor (value) {
        super('results', value)
    }

    toString () {
        return [this.value.wins || 0, this.value.draws || 0, this.value.losses || 0].join('-')
    }
}
