import ChangeDisplayedStandingsStat from '../../../src/Standings/ActionCreators/ChangeDisplayedStandingsStat'
import { Types } from '../../../src/Shared/Actions'

describe('ChangeDisplayedStandingsStat', () => {
    it('should create an action to change visible stat', () => {
        const stat = 'results'
        const expected = { type: Types.STANDINGS_CHANGE_STAT, stat }

        expect(ChangeDisplayedStandingsStat(stat)).toEqual(expected)
    })
})

