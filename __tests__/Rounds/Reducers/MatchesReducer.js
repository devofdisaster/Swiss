import MatchesReducer from '../../../src/Rounds/Reducers/MatchesReducer'
import ChangeMatchResult from '../../../src/Rounds/ActionCreators/ChangeMatchResult'
import AddNewRound from '../../../src/Rounds/ActionCreators/AddNewRound'
import DeleteLastRound from '../../../src/Rounds/ActionCreators/DeleteLastRound'

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

    it('should replace the match state completely on Rounds/AddNew', () => {
        const expectedState = {
            'some-id-1': { id: 'some-id-1', playerOne: 'some-player-1', playerTwo: 'some-player-2', result: '2-2'},
            'some-id-2': { id: 'some-id-2', playerOne: 'some-player-3', playerTwo: 'some-player-4', result: '5-0'}
        }

        expect(MatchesReducer(state, AddNewRound({ matches: expectedState}))).toEqual(expectedState)
    })

    it('should remove matches present in the removed round on Rounds/DeleteLast', () => {
        const expectedState = {}

        expect(MatchesReducer(state, DeleteLastRound({ matches: ['some-id-1']}))).toEqual(expectedState)
    })
})
