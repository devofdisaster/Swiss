import PlayersReducer       from '../../../src/Players/Reducers/PlayersReducer'
import SaveNewPlayer        from '../../../src/Players/ActionsCreators/SaveNewPlayer'
import SaveExistingPlayer   from '../../../src/Players/ActionsCreators/SaveExistingPlayer'

jest.mock('../../../src/Shared/InitialState');

describe('PlayersReducer', () => {
    const state = {
        'player-one': { id: 'player-one', nickname: 'Jeronimo', score: 37 },
        'player-two': { id: 'player-two', nickname: 'Martin', score: 56  },
    }

    it('should add a new player on Players/SaveNew', () => {
        const newPlayer = { id: 'player-five-hundred', nickname: 'xXxLegolas9273xXx', score: 9001 }
        const expectedState = { ...state, [newPlayer.id]: newPlayer }

        expect(PlayersReducer(state, SaveNewPlayer(newPlayer))).toEqual(expectedState)
    })

    it('should update an existing player on Players/SaveExisting', () => {
        const existingPlayer = { id: 'player-one', nickname: 'Bob' }
        const expectedState = { ...state, [existingPlayer.id]: { ...state[existingPlayer.id], ...existingPlayer } }

        expect(PlayersReducer(state, SaveExistingPlayer(existingPlayer))).toEqual(expectedState)
    })
})

