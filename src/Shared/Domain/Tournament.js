import Player from './Player'
import Match from './Match'
import Round from './Round'

export default class Tournament {
    constructor(players, rounds, matches) {
        this._players = players.map((data) => new Player(data))
        this._matches = matches.map((data) => {
            const player1 = this._players.find((player) => player.getId() === data.player1)
            const player2 = data.player2 ? this._players.find((player) => player.getId() === data.player2) : null

            return new Match(data.id, player1, player2, data.round, data.result)
        })
        this._rounds = rounds.map(
            (data, index) => new Round(
                index,
                this._matches.filter((match) => match.getRoundIndex() === index),
                data.finished
            )
        )
    }

    getMatches() {
        return this._matches
    }

    getPlayers() {
        return this._players
    }

    getRounds() {
        return this._rounds
    }

    startNewRound() {
        if (!this._rounds.length) {
            return this.generateFirstRound()
        }

        return this.generateNextRound(this._rounds.length)
    }

    generateFirstRound() {
        const randomizedPlayers = this.getPlayersInRandomOrder()
        const matches = this.generateFirstRoundMatches(randomizedPlayers)
        const firstRound = new Round(0, matches)

        this._matches = matches
        this._rounds[firstRound.getIndex()] = firstRound

        return firstRound
    }

    generateNextRound(index) {
        const sortedPlayers = this.sortPlayersByPower()
        const round = new Round(index)

        if (this.pairPlayersRecursively(sortedPlayers, round)) {
            this._rounds[round.getIndex()] = round
            this._matches = [...this._matches, ...round.getMatches()]

            return round
        }

        return null
    }

    pairPlayersRecursively(players, round) {
        if (!players.length) {
            return true;
        }

        if (players.length === 1) {
            const playerToBye = players[0]

            if (playerToBye.hasPlayedWith(null)) {
                return false
            }

            round.addMatch(Match.bye(playerToBye, round.getIndex()))

            return true
        }

        for (let p1index  = 0; p1index < players.length; p1index++) {
            const player1 = players[p1index];

            if (round.hasPlayerMatched(player1)) {
                continue;
            }

            for (let p2index = p1index + 1; p2index < players.length; p2index++) {
                const player2 = players[p2index]

                if (round.hasPlayerMatched(player2)) {
                    continue;
                }

                if (!player1.hasPlayedWith(player2)) {
                    const match = Match.withPlayers(player1, player2, round.getIndex())
                    const remainingPlayers = players.filter(
                        (player) => [player1.getId(), player2.getId()].indexOf(player.getId()) < 0
                    )

                    round.addMatch(match)

                    if (!this.pairPlayersRecursively(remainingPlayers, round)) {
                        round.removeMatch(match)
                        player1.removeMatch(match)
                        player2.removeMatch(match)

                        continue
                    }

                    return true
                }
            }
        }

        return false
    }

    getPlayersInRandomOrder() {
        const currentPlayers = this._players.slice()
        let randomizedPlayers = []
        let index = currentPlayers.length

        while (index > 0) {
            let randomIndex = Math.floor(Math.random() * index)

            randomizedPlayers = [...randomizedPlayers, ...currentPlayers.splice(randomIndex, 1)]
            index--
        }

        return randomizedPlayers
    }

    sortPlayersByPower() {
        return this._players.slice().sort((player1, player2) => {
            if (player1.hasEqualStat('points', player2)) {
                if (player1.hasEqualStat('sos', player2)) {
                    if (player1.hasEqualStat('ssos', player2)) {
                        return Math.floor((Math.random() * 100)) < 50 ? -1 : 1
                    }

                    return player2.hasLowerStat('ssos', player1) ? -1 : 1
                }

                return player2.hasLowerStat('sos', player1) ? -1 : 1
            }

            return player2.hasLowerStat('points', player1) ? -1 : 1
        })
    }

    generateFirstRoundMatches(players = []) {
        let matches = []

        for (let i = 0; i < players.length; i = i + 2) {
            if (i === players.length - 1) {
                matches.push(Match.bye(players[i], 0))
            } else {
                const player1 = players[i]
                const player2 = players[i+1]

                matches.push(Match.withPlayers(player1, player2, 0))
            }
        }

        return matches
    }
}
