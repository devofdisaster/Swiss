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

    startNewRound() {
        if (!this._rounds.length) {
            return this.generateFirstRound()
        }

        return this.generateNextRound()
    }

    generateFirstRound() {
        const randomizedPlayers = this.getPlayersInRandomOrder()
        const matches = this.generateFirstRoundMatches(randomizedPlayers)
        const firstRound = new Round(0, matches)

        this._matches = matches
        this._rounds[firstRound.getIndex()] = firstRound

        return firstRound
    }

    generateNextRound() {
        return this.generateRoundWithMatches()
    }

    generateRoundWithMatches(matches = []) {
        const round = new Round(this._rounds.length, matches.map((match) => {
            const player1 = this._players.find((player) => player.getId() === match.player1)
            const player2 = match.player2 ? this._players.find((player) => player.getId() === match.player2) : null

            return new Match(match.id, player1, player2, match.round, match.result)
        }))
        const sortedPlayers = this.sortPlayersByPower().filter(
            (player) => player.isEnabled() && !round.hasPlayerMatched(player)
        )

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
                    continue
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

    determineAvailableMatches() {
        const availableMatches = []
        const sortedPlayers = this.sortPlayersByPower()
            .filter((player) => player.isEnabled() && !player.hasPlayedInRound(this._rounds.length))

        for (let p1index = 0; p1index < sortedPlayers.length; p1index++) {
            const player1 = sortedPlayers[p1index]

            for (let p2index = p1index + 1; p2index < sortedPlayers.length; p2index++) {
                const player2 = sortedPlayers[p2index]

                if (player2.hasPlayedWith(player1)) {
                    continue
                }

                availableMatches.push(Match.withPlayers(player1, player2, this._rounds.length))
            }
        }

        if (sortedPlayers.length % 2) {
            for (let player of sortedPlayers) {
                if (!player.hasPlayedWith(null)) {
                    availableMatches.push(Match.bye(player, this._rounds.length))
                }
            }
        }

        return availableMatches
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

    recalculateScores() {
        this._players.forEach((player) => player.resetStats())
        this.recalculateSimpleStats()
        this.recalculateSoS()
        this.recalculateSSoS()
    }

    recalculateSimpleStats() {
        this._rounds.forEach((round) => round.addSimpleStatsToPlayerScores())
    }

    recalculateSoS() {
        this._players.forEach((player) => {
            const opponents = player.getOpponents()
            const sumOfOpsAvg = opponents.reduce(
                (sum, opp) => {
                    const ops = opp.getOpponents()

                    return sum + (ops.length ? (opp.getStatistic('points').getValue() / ops.length) : 0)
                },
                0
            )

            player.addSoS(opponents.length ? sumOfOpsAvg / opponents.length : 0)
        })
    }

    recalculateSSoS() {
        this._players.forEach((player) => {
            const opponents = player.getOpponents()
            const sumOfOpsSoS = opponents.reduce(
                (sum, opp) => sum + opp.getStatistic('sos').getValue(),
                0
            )

            player.addSSoS(opponents.length ? sumOfOpsSoS / opponents.length : 0)
        })
    }

    getPlayerScoreState() {
        const scores = {}

        this._players.forEach((player) => scores[player.getId()] = player.getPlainStats())

        return scores
    }

    getNewRoundState() {
        const matches = {}
        const players = {}

        this._matches.forEach((match) => {
            matches[match.getId()] = {
                id: match.getId(),
                player1: match.getPlayerOneId(),
                player2: match.getPlayerTwoId(),
                round: match.getRoundIndex(),
                result: match.getResultKey()
            }
        })

        this._players.forEach((player) => {
            players[player.getId()] = {
                id: player.getId(),
                firstname: player.getFirstname(),
                lastname: player.getLastname(),
                nickname: player.getNickname(),
                enabled: player.isEnabled(),
                order: player.getOriginalOrder(),
                matches: player.getMatchIds(),
                ...player.getPlainStats()
            }
        })

        return {
            matches,
            players,
            rounds: this._rounds.map((round) => ({
                matches: round.getMatchIds(),
                index: round.getIndex(),
                finished: round.isFinished()
            }))
        }
    }
}
