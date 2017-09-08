import PlayersReducer       from '../../../src/Players/Reducers/PlayersReducer'
import SaveNewPlayer        from '../../../src/Players/ActionCreators/SaveNewPlayer'
import SaveExistingPlayer   from '../../../src/Players/ActionCreators/SaveExistingPlayer'
import DisablePlayer from '../../../src/Players/ActionCreators/DisablePlayer'
import EnablePlayer from '../../../src/Players/ActionCreators/EnablePlayer'
import DeletePlayer from '../../../src/Players/ActionCreators/DeletePlayer'
import UpdateScores from '../../../src/Players/ActionCreators/UpdateScores'
import DeleteLastRound from '../../../src/Rounds/ActionCreators/DeleteLastRound'
import {Types} from '../../../src/Shared/Actions'
import LoadTournamentData from '../../../src/Tournament/ActionCreators/LoadTournamentData'

jest.mock('../../../src/Shared/InitialState');

describe('PlayersReducer', () => {
    const state = {
        'player-one': { id: 'player-one', nickname: 'Jeronimo', order: 0, enabled: true, matches: [1,2,3,4] },
        'player-two': { id: 'player-two', nickname: 'Martin', order: 1, enabled: false, matches: [1,2,3,4] },
    }

    it('should add a new player on Players/SaveNew', () => {
        const newPlayer = {
            id: 'player-five-hundred',
            nickname: 'xXxLegolas9273xXx',
            order: 2,
            enabled: true
        }
        const addedInitialStats = {
            comparison: { plus: 0, minus: 0 },
            games: 0,
            points: 0,
            results: { wins: 0, draws: 0, losses: 0 },
            sos: 0,
            ssos: 0
        }
        const expectedState = {
            ...state,
            'player-five-hundred': {...newPlayer, ...addedInitialStats}
        }

        expect(PlayersReducer(state, SaveNewPlayer(newPlayer))).toEqual(expectedState)
    })

    it('should update an existing player on Players/SaveExisting', () => {
        const existingPlayer = { id: 'player-one', nickname: 'Bob' }
        const expectedState = {
            'player-one': { id: 'player-one', nickname: 'Bob', order: 0, enabled: true, matches: [1,2,3,4] },
            'player-two': { id: 'player-two', nickname: 'Martin', order: 1, enabled: false, matches: [1,2,3,4] },
        }

        expect(PlayersReducer(state, SaveExistingPlayer(existingPlayer))).toEqual(expectedState)
    })

    it('should disable a player on Players/Disable', () => {
        const expectedState = {
            'player-one': { id: 'player-one', nickname: 'Jeronimo', order: 0, enabled: false, matches: [1,2,3,4] },
            'player-two': { id: 'player-two', nickname: 'Martin', order: 1, enabled: false, matches: [1,2,3,4] },
        }

        expect(PlayersReducer(state, DisablePlayer('player-one'))).toEqual(expectedState)
    })

    it('should enable a player on Players/Enable', () => {
        const expectedState = {
            'player-one': { id: 'player-one', nickname: 'Jeronimo', order: 0, enabled: true, matches: [1,2,3,4] },
            'player-two': { id: 'player-two', nickname: 'Martin', order: 1, enabled: true, matches: [1,2,3,4] },
        }

        expect(PlayersReducer(state, EnablePlayer('player-two'))).toEqual(expectedState)
    })

    it('should delete given player and update other players order on Players/Delete', () => {
        const state = {
            'player-one': { id: 'player-one', nickname: 'Jeronimo', order: 0, enabled: true },
            'player-two': { id: 'player-two', nickname: 'Martin', order: 1, enabled: false },
            'player-three': { id: 'player-three', nickname: 'Brajan', order: 2, enabled: false },
        }
        const expectedState = {
            'player-two': { id: 'player-two', nickname: 'Martin', order: 0, enabled: false },
            'player-three': { id: 'player-three', nickname: 'Brajan', order: 1, enabled: false },
        }

        expect(PlayersReducer(state, DeletePlayer('player-one'))).toEqual(expectedState)
    })

    it('should update player scores on Players/UpdateScores', () => {
        const expectedState = {
            'player-one': {
                id: 'player-one', nickname: 'Jeronimo', points: 77, order: 0, enabled: true, matches: [1,2,3,4]
            },
            'player-two': {
                id: 'player-two', nickname: 'Martin', points: 77, order: 1, enabled: false, matches: [1,2,3,4]
            }
        }
        const freshScores = {
            'player-one': { points: 77 },
            'player-two': { points: 77 }
        }

        expect(PlayersReducer(state, UpdateScores(freshScores))).toEqual(expectedState)
    })

    it('should remove matches from players if the match was in the deleted round on Rounds/DeleteLast', () => {
        const expectedState = {
            'player-one': {
                id: 'player-one', nickname: 'Jeronimo', order: 0, enabled: true, matches: [1,2]
            },
            'player-two': {
                id: 'player-two', nickname: 'Martin', order: 1, enabled: false, matches: [1,2]
            }
        }

        expect(PlayersReducer(state, DeleteLastRound({ index: 1, matches: [3,4] }))).toEqual(expectedState)
    })

    it('should remove all players on Tournament/StartNew', () => {
        expect(PlayersReducer(state, { type: Types.TOURNAMENT_START_NEW })).toEqual({})
    })

    it('should load new player data on Tournament/LoadData', () => {
        expect(PlayersReducer(state, LoadTournamentData({ players: {} }))).toEqual({})
    })
})

