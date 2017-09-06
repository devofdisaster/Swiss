import RoundsReducer from '../../../src/Rounds/Reducers/RoundsReducer'
import FinishRound from '../../../src/Rounds/ActionCreators/FinishRound'
import EditRound from '../../../src/Rounds/ActionCreators/EditRound'
import AddNewRound from '../../../src/Rounds/ActionCreators/AddNewRound'

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

    it('should replace entire rounds state on Rounds/AddNew', () => {
        const expectedState = [
            { finished: true, matches: ['1', '2', '3', '4'] },
            { finished: true, matches: ['5', '6', '7', '8'] },
            { finished: true, matches: ['9', '10', '11', '12'] },
        ]

        expect(RoundsReducer(state, AddNewRound({ rounds: expectedState }))).toEqual(expectedState)
    })
})
