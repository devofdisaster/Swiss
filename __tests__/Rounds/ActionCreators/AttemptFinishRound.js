import AttemptFinishRound from '../../../src/Rounds/ActionCreators/AttemptFinishRound'
import { Types } from '../../../src/Shared/Actions'

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
        const expectedActions = [{ type: Types.ROUNDS_FINISH, round: 0 }]

        AttemptFinishRound(0)(dispatch, getState)

        expect(actualActions).toEqual(expectedActions)
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


