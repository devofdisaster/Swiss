import RecalculateScores from '../../../src/Shared/ActionCreators/RecalculateScores'
import { Types } from '../../../src/Shared/Actions'

jest.mock('../../../src/Shared/Domain/Tournament')

describe('RecalculateScores', () => {
    it('should dispatch a thunk action that recalculates scores and dispatches 3 specific actions', () => {
        const actualActions = []
        const dispatch = (action) => actualActions.push(action)
        const getState = () => ({
            rounds: [],
            matches: {},
            players: {
                'player-1': { id: 'player-1', points: 5 }
            }
        })
        const expectedActions = [
            { type: Types.PLAYERS_UPDATE_SCORES, scores: { 'player-1': { points: 77 }}},
            { type: Types.PLAYERS_LIST_REFRESH },
            { type: Types.STANDINGS_REFRESH }
        ]

        RecalculateScores()(dispatch, getState)

        expect(actualActions).toEqual(expectedActions)
    })
})

