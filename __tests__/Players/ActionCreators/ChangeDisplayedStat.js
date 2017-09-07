import ChangeDisplayedStat from '../../../src/Players/ActionCreators/ChangeDisplayedStat'
import { Types } from '../../../src/Shared/Actions'

describe('ChangeDisplayedStat', () => {
    it('should create an action to add given player to list', () => {
        const stat = 'results'
        const expected = { type: Types.PLAYERS_LIST_CHANGE_STAT, stat }

        expect(ChangeDisplayedStat(stat)).toEqual(expected)
    })
})

