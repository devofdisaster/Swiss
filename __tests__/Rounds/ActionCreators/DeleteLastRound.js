import DeleteLastRound from '../../../src/Rounds/ActionCreators/DeleteLastRound'
import { Types } from '../../../src/Shared/Actions'

describe('DeleteLastRound', () => {
    it('should create an action to delete last round', () => {
        const expected = { type: Types.ROUNDS_DELETE_LAST, round: { index: 1, matches: [1,2]} }

        expect(DeleteLastRound({ index: 1, matches: [1, 2]})).toEqual(expected)
    })
})


