import UpdateScores from '../../../src/Players/ActionCreators/UpdateScores'
import { Types } from '../../../src/Shared/Actions'

describe('UpdateScores', () => {
    it('should create an action to add given player to list', () => {
        const expected = { type: Types.PLAYERS_UPDATE_SCORES, scores: { 'player-one': { points: 55 }} }

        expect(UpdateScores({ 'player-one': { points: 55 }})).toEqual(expected)
    })
})

