import RoundsReducer from '../../../src/Rounds/Reducers/RoundsReducer'
import FinishRound from '../../../src/Rounds/ActionCreators/FinishRound'
import EditRound from '../../../src/Rounds/ActionCreators/EditRound'
import AddNewRound from '../../../src/Rounds/ActionCreators/AddNewRound'
import DeleteLastRound from '../../../src/Rounds/ActionCreators/DeleteLastRound'

jest.mock('../../../src/Shared/InitialState');

describe('RoundsReducer', () => {
    const state = [
        { index: 0, finished: true },
        { index: 1, finished: false }
    ]

    it('should set given round as finished on Rounds/Finish', () => {
        const expectedState = [
            { index: 0, finished: true },
            { index: 1, finished: true }
        ]

        expect(RoundsReducer(state, FinishRound(1))).toEqual(expectedState)
    })

    it('should set given round as not finished on Rounds/Edit', () => {
        const expectedState = [
            { index: 0, finished: false },
            { index: 1, finished: false }
        ]

        expect(RoundsReducer(state, EditRound(0))).toEqual(expectedState)
    })

    it('should replace entire rounds state on Rounds/AddNew', () => {
        const expectedState = [
            { index: 0, finished: true, matches: ['1', '2', '3', '4'] },
            { index: 1, finished: true, matches: ['5', '6', '7', '8'] },
            { index: 2, finished: true, matches: ['9', '10', '11', '12'] },
        ]

        expect(RoundsReducer(state, AddNewRound({ rounds: expectedState }))).toEqual(expectedState)
    })

    it('should remove last round on Rounds/DeleteLast', () => {
        const expectedState = [
            { index: 0, finished: true },
        ]

        expect(RoundsReducer(state, DeleteLastRound({ index: 1 }))).toEqual(expectedState)
    })
})
