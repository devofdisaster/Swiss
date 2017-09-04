import EditRound from '../../../src/Rounds/ActionCreators/EditRound'
import { Types } from '../../../src/Shared/Actions'

describe('EditRound', () => {
    it('should create an action to make a round editable', () => {
        const expected = { type: Types.ROUNDS_EDIT, round: 0 }

        expect(EditRound(0)).toEqual(expected)
    })
})


