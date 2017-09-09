import Comparison from './Statistic/Comparison'
import Games from './Statistic/Games'
import Points from './Statistic/Points'
import Results from './Statistic/Results'
import SoS from './Statistic/SoS'
import SSoS from './Statistic/SSoS'
import Match from './Match'

export default class Player {
    constructor(data, matches = []) {
        this._id = data.id
        this._enabled = data.enabled
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
        this._matches = matches
    }

    disable() {
        this._enabled = false
    }

    enable() {
        this._enabled = true
    }

    getFirstname() {
        return this._firstname
    }

    getNickname() {
        return this._nickname
    }

    getLastname() {
        return this._lastname
    }

    getId() {
        return this._id
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

    hasEqualStat(stat, otherPlayer) {
        return this._stats[stat].isEqualTo(otherPlayer.getStatistic(stat))
    }

    hasPlayedWith(otherPlayer) {
        return this._matches.some((match) => match.hasPlayer(otherPlayer))
    }

    hasPlayedInRound(index) {
        return this._matches.some((match) => match.getRoundIndex() === index)
    }

    isEnabled() {
        return !!this._enabled
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

    addMatch(match) {
        this._matches.push(match)
    }

    removeMatch(nonGrata) {
        const index = this._matches.findIndex((match) => match.getId() === nonGrata.getId())

        this._matches.splice(index, 1)
    }

    getMatchIds() {
        return this._matches.map((match) => match.getId())
    }

    resetStats() {
        this._stats.comparison = new Comparison({ plus: 0, minus: 0});
        this._stats.games = new Games(0);
        this._stats.points = new Points(0);
        this._stats.results = new Results({ wins: 0, draws: 0, losses: 0});
        this._stats.sos = new SoS(0);
        this._stats.ssos = new SSoS(0);
    }

    incrementGamesPlayed() {
        this._stats.games.increment()
    }

    addPoints(points) {
        this._stats.points.add(points)
    }

    addComparison(plus, minus) {
        this._stats.comparison.addPositive(plus)
        this._stats.comparison.addNegative(minus)
    }

    addResults(wins, draws, losses) {
        if (wins) {
            this._stats.results.addWins(wins*1)
        }

        if (draws) {
            this._stats.results.addDraws(draws*1)
        }

        if (losses) {
            this._stats.results.addLosses(losses*1)
        }
    }

    addSoS(value) {
        this._stats.sos.add(value)
    }

    addSSoS(value) {
        this._stats.ssos.add(value)
    }

    getOpponents() {
        return this._matches
            .map((match) => match.getOpponentTo(this))
            .filter((player) => !!player)
    }

    getPlainStats() {
        return {
            games: this._stats.games.getValue(),
            points: this._stats.points.getValue(),
            results: {...this._stats.results.getValue()},
            comparison: {...this._stats.comparison.getValue()},
            sos: this._stats.sos.getValue(),
            ssos: this._stats.ssos.getValue(),
        }
    }
}
