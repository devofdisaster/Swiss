import Comparison from './Statistic/Comparison'
import Games from './Statistic/Games'
import Points from './Statistic/Points'
import Results from './Statistic/Results'
import SoS from './Statistic/SoS'
import SSoS from './Statistic/SSoS'

export default class Player {
    constructor(data) {
        this.id = data.id
        this.firstname = (data.firstname || '').trim()
        this.nickname = (data.nickname || '').trim()
        this.lastname = (data.lastname || '').trim()
        this.stats = {
            comparison: new Comparison(data.comparison),
            games: new Games(data.games),
            points: new Points(data.points),
            results: new Results(data.results),
            sos: new SoS(data.sos),
            ssos: new SSoS(data.ssos)
        }
    }

    renderName() {
        const nameParts = [];

        if (this.firstname) {
            nameParts.push(this.firstname)
        }

        if (this.nickname) {
            nameParts.push(`'${this.nickname}'`)
        }

        if (this.lastname) {
            nameParts.push(this.lastname)
        }

        return nameParts.join(' ')
    }

    renderStatistic(name) {
        return this.stats[name].toString()
    }
}
