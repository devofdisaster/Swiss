import SortByPlayerOrder from '../../../src/Players/ActionsCreators/SortByPlayerOrder'
import { Types } from '../../../src/Shared/Actions'

describe('SortByPlayerOrder', () => {
    it('should create an action to sort players list by order', () => {
        const expected = { type: Types.PLAYERS_LIST_SORT_BY_COLUMN, column: 'order' }

        expect(SortByPlayerOrder()).toEqual(expected)
    })
})
