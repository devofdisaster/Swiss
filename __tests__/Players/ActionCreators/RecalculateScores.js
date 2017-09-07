import RecalculateScores from '../../../src/Players/ActionCreators/RecalculateScores'
import { Types } from '../../../src/Shared/Actions'

jest.mock('../../../src/Shared/Domain/Tournament')

describe('RecalculateScores', () => {
    it('should dispatch a thunk action that recalculates scores and dispatches UpdateScores', () => {
        const actualActions = []
        const dispatch = (action) => actualActions.push(action)
        const getState = () => ({
            rounds: [],
            matches: {},
            players: {
                'player-1': { id: 'player-1', points: 5 }
            }
        })
        const expectedActions = [{ type: Types.PLAYERS_UPDATE_SCORES, scores: { 'player-1': { points: 77 }}}]

        RecalculateScores()(dispatch, getState)

        expect(actualActions).toEqual(expectedActions)
    })
})

