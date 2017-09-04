import RoundsReducer from '../../../src/Rounds/Reducers/RoundsReducer'
import FinishRound from '../../../src/Rounds/ActionCreators/FinishRound'
import EditRound from '../../../src/Rounds/ActionCreators/EditRound'

jest.mock('../../../src/Shared/InitialState');

describe('RoundsReducer', () => {
    const state = [
        { finished: true },
        { finished: false }
    ]

    it('should set given round as finished on Rounds/Finish', () => {
        const expectedState = [
            { finished: true },
            { finished: true }
        ]

        expect(RoundsReducer(state, FinishRound(1))).toEqual(expectedState)
    })

    it('should set given round as not finished on Rounds/Edit', () => {
        const expectedState = [
            { finished: false },
            { finished: false }
        ]

        expect(RoundsReducer(state, EditRound(0))).toEqual(expectedState)
    })
})
