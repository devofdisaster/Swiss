import AttemptFinishRound from '../../../src/Rounds/ActionCreators/AttemptFinishRound'
import RecalculateScores from '../../../src/Players/ActionsCreators/RecalculateScores'
import FinishRound from '../../../src/Rounds/ActionCreators/FinishRound'

describe('AttemptFinishRound', () => {
    it('should dispatch an action to finish given round if all matches have results', () => {
        const actualActions = []
        const dispatch = (action) => actualActions.push(action)
        const getState = () => ({
            rounds: [{ matches: ['some-match-1', 'some-match-2'] }],
            matches: {
                'some-match-1': { result: '5-0' },
                'some-match-2': { result: '2-2' }
            }
        })
        const expectedActions = [FinishRound(0), RecalculateScores()]

        AttemptFinishRound(0)(dispatch, getState)

        expect(actualActions[0]).toEqual(expectedActions[0])
        expect(actualActions[1].name).toEqual(expectedActions[1].name)
    })

    it('should not dispatch any actions if some matches dont have results', () => {
        const actualActions = []
        const dispatch = (action) => actualActions.push(action)
        const getState = () => ({
            rounds: [{ matches: ['some-match-1', 'some-match-2'] }],
            matches: {
                'some-match-1': { result: '5-0' },
                'some-match-2': { result: null }
            }
        })
        const expectedActions = []

        AttemptFinishRound(0)(dispatch, getState)

        expect(actualActions).toEqual(expectedActions)
    })
})


