import PlayersReducer       from '../../../src/Players/Reducers/PlayersReducer'
import SaveNewPlayer        from '../../../src/Players/ActionsCreators/SaveNewPlayer'
import SaveExistingPlayer   from '../../../src/Players/ActionsCreators/SaveExistingPlayer'
import DisablePlayer from '../../../src/Players/ActionsCreators/DisablePlayer'
import EnablePlayer from '../../../src/Players/ActionsCreators/EnablePlayer'

jest.mock('../../../src/Shared/InitialState');

describe('PlayersReducer', () => {
    const state = {
        'player-one': { id: 'player-one', nickname: 'Jeronimo', score: 37, order: 0, enabled: true },
        'player-two': { id: 'player-two', nickname: 'Martin', score: 56, order: 1, enabled: false },
    }

    it('should add a new player on Players/SaveNew', () => {
        const newPlayer = {
            id: 'player-five-hundred',
            nickname: 'xXxLegolas9273xXx',
            score: 9001,
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
            'player-one': { id: 'player-one', nickname: 'Bob', score: 37, order: 0, enabled: true },
            'player-two': { id: 'player-two', nickname: 'Martin', score: 56, order: 1, enabled: false },
        }

        expect(PlayersReducer(state, SaveExistingPlayer(existingPlayer))).toEqual(expectedState)
    })

    it('should disable a player on Players/Disable', () => {
        const expectedState = {
            'player-one': { id: 'player-one', nickname: 'Jeronimo', score: 37, order: 0, enabled: false },
            'player-two': { id: 'player-two', nickname: 'Martin', score: 56, order: 1, enabled: false },
        }

        expect(PlayersReducer(state, DisablePlayer('player-one'))).toEqual(expectedState)
    })

    it('should enable a player on Players/Enable', () => {
        const expectedState = {
            'player-one': { id: 'player-one', nickname: 'Jeronimo', score: 37, order: 0, enabled: true },
            'player-two': { id: 'player-two', nickname: 'Martin', score: 56, order: 1, enabled: true },
        }

        expect(PlayersReducer(state, EnablePlayer('player-two'))).toEqual(expectedState)
    })
})

