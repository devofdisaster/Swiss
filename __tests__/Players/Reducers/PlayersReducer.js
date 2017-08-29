import PlayersReducer       from '../../../src/Players/Reducers/PlayersReducer'
import SaveNewPlayer        from '../../../src/Players/ActionsCreators/SaveNewPlayer'
import SaveExistingPlayer   from '../../../src/Players/ActionsCreators/SaveExistingPlayer'

jest.mock('../../../src/Shared/InitialState');

describe('PlayersReducer', () => {
    const state = {
        'player-one': { id: 'player-one', nickname: 'Jeronimo', score: 37, order: 0 },
        'player-two': { id: 'player-two', nickname: 'Martin', score: 56, order: 1  },
    }

    it('should add a new player on Players/SaveNew', () => {
        const newPlayer = { id: 'player-five-hundred', nickname: 'xXxLegolas9273xXx', score: 9001, order: 2 }
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
            'player-one': { id: 'player-one', nickname: 'Bob', score: 37, order: 0 },
            'player-two': { id: 'player-two', nickname: 'Martin', score: 56, order: 1 },
        }

        expect(PlayersReducer(state, SaveExistingPlayer(existingPlayer))).toEqual(expectedState)
    })
})

