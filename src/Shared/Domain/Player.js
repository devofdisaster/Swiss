import Comparison from './Statistic/Comparison'
import Games from './Statistic/Games'
import Points from './Statistic/Points'
import Results from './Statistic/Results'
import SoS from './Statistic/SoS'
import SSoS from './Statistic/SSoS'

export default class Player {
    constructor(data) {
        this._id = data.id
        this._firstname = (data.firstname || '').trim()
        this._nickname = (data.nickname || '').trim()
        this._lastname = (data.lastname || '').trim()
        this._stats = {
            comparison: new Comparison(data.comparison),
            games: new Games(data.games),
            points: new Points(data.points),
            results: new Results(data.results),
            sos: new SoS(data.sos),
            ssos: new SSoS(data.ssos)
        }
        this._originalOrder = data.order
    }

    renderName() {
        const nameParts = [];

        if (this._firstname) {
            nameParts.push(this._firstname)
        }

        if (this._nickname) {
            nameParts.push(`'${this._nickname}'`)
        }

        if (this._lastname) {
            nameParts.push(this._lastname)
        }

        return nameParts.join(' ')
    }

    renderStatistic(name) {
        return this._stats[name].toString()
    }

    getOriginalOrder() {
        return this._originalOrder
    }

    getStatistic(name) {
        return this._stats[name]
    }

    hasLowerStat(stat, otherPlayer) {
        return this._stats[stat].isLowerThan(otherPlayer.getStatistic(stat))
    }
}
