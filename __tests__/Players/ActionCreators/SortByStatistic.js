import SortByStatistic from '../../../src/Players/ActionCreators/SortByStatistic'
import { Types } from '../../../src/Shared/Actions'

describe('SortByStatistic', () => {
    it('should create an action to sort players list by statistic', () => {
        const expected = { type: Types.PLAYERS_LIST_SORT_BY_COLUMN, column: 'stat' }

        expect(SortByStatistic()).toEqual(expected)
    })
})
