import FinishRound from '../../../src/Rounds/ActionCreators/FinishRound'
import { Types } from '../../../src/Shared/Actions'

describe('FinishRound', () => {
    it('should create an action to make a round noneditable', () => {
        const expected = { type: Types.ROUNDS_FINISH, round: 0 }

        expect(FinishRound(0)).toEqual(expected)
    })
})



