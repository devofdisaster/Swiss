export default class Round {
    constructor(index, matches = [], finished = false) {
        this._index = index
        this._matches = matches
        this._finished = finished
    }

    getIndex() {
        return this._index
    }

    isFinished() {
        return !!this._finished
    }

    addMatch(match) {
        this._matches.push(match)
    }

    removeMatch(nonGrata) {
        const index = this._matches.findIndex((match) => match.getId() === nonGrata.getId())

        this._matches.splice(index, 1)
    }

    getMatches() {
        return this._matches
    }

    getMatchIds() {
        return this._matches.map((match) => match.getId())
    }

    hasPlayerMatched(player) {
        return this._matches.some((match) => match.hasPlayer(player))
    }
}
