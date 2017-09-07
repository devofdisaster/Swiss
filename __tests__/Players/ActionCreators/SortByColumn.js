import SortByColumn from '../../../src/Players/ActionCreators/SortByColumn'
import { Types } from '../../../src/Shared/Actions'

describe('SortByColumn', () => {
    it('should create an action to sort players list by name', () => {
        const column = 'name'
        const expected = { type: Types.PLAYERS_LIST_SORT_BY_COLUMN, column }

        expect(SortByColumn(column)).toEqual(expected)
    })

    it('should create an action to sort players list by order', () => {
        const column = 'order'
        const expected = { type: Types.PLAYERS_LIST_SORT_BY_COLUMN, column }

        expect(SortByColumn(column)).toEqual(expected)
    })

    it('should create an action to sort players list by stat', () => {
        const column = 'stat'
        const expected = { type: Types.PLAYERS_LIST_SORT_BY_COLUMN, column }

        expect(SortByColumn(column)).toEqual(expected)
    })
})
