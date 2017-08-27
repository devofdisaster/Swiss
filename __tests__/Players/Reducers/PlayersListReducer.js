import PlayersListReducer   from '../../../src/Players/Reducers/PlayersListReducer'
import AddPlayerToList      from '../../../src/Players/ActionsCreators/AddPlayerToList'

jest.mock('../../../src/Shared/InitialState');

describe('PlayersListReducer', () => {
    const state = { players: [], visibleStat: 'points' }

    it('should add a player id to the players list', () => {
        const newPlayer = { id: 'player-five-hundred', nickname: 'xXxLegolas9273xXx', score: 9001 }
        const expectedState = { players: ['player-five-hundred'], visibleStat: 'points'}

        expect(PlayersListReducer(state, AddPlayerToList(newPlayer))).toEqual(expectedState)
    })
})
