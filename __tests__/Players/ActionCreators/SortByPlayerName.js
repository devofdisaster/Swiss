import SortByPlayerName from '../../../src/Players/ActionCreators/SortByPlayerName'
import { Types } from '../../../src/Shared/Actions'

describe('SortByPlayerName', () => {
    it('should create an action to sort players list by name', () => {
        const expected = { type: Types.PLAYERS_LIST_SORT_BY_COLUMN, column: 'name' }

        expect(SortByPlayerName()).toEqual(expected)
    })
})
