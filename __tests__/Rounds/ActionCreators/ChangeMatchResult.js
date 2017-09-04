import ChangeMatchResult from '../../../src/Rounds/ActionCreators/ChangeMatchResult'
import { Types } from '../../../src/Shared/Actions'

describe('ChangeMatchResult', () => {
    it('should create an action to change a match result', () => {
        const expected = { type: Types.ROUNDS_CHANGE_MATCH_RESULT, id: 'some-id', result: '5-0' }

        expect(ChangeMatchResult('some-id', '5-0')).toEqual(expected)
    })
})


