import MatchesReducer from '../../../src/Rounds/Reducers/MatchesReducer'
import ChangeMatchResult from '../../../src/Rounds/ActionCreators/ChangeMatchResult'

jest.mock('../../../src/Shared/InitialState');

describe('MatchesReducer', () => {
    const state = {
        'some-id-1': { id: 'some-id-1', playerOne: 'some-player-1', playerTwo: 'some-player-2', result: null}
    }

    it('should change the result of given match to given result on Rounds/ChangeMatchResult', () => {
        const expectedState = {
            'some-id-1': { id: 'some-id-1', playerOne: 'some-player-1', playerTwo: 'some-player-2', result: '2-2'}
        }

        expect(MatchesReducer(state, ChangeMatchResult('some-id-1', '2-2'))).toEqual(expectedState)
    })
})
