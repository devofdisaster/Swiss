import InitialState from '../../../src/Shared/InitialState'
import TournamentReducer from '../../../src/Tournament/Reducers/TournamentReducer'

jest.mock('../../../src/Shared/InitialState');

describe('TournamentReducer', () => {
    const state = InitialState.tournament

    it('does nothing currently', () => {
        expect(TournamentReducer(state, { type: 'Whatever' })).toEqual(state)
    })
})
