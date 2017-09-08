import {Types} from '../../../src/Shared/Actions'
import ShowAvailableSaves from '../../../src/Tournament/ActionCreators/ShowAvailableSaves'

describe('ShowAvailableSaves', () => {
    it('should create an action to show available saves in load modal', () => {
        const expected = { type: Types.TOURNAMENT_SHOW_SAVED_ITEMS, data: ['save-1', 'save-2'] }

        expect(ShowAvailableSaves(['save-1', 'save-2'])).toEqual(expected)
    })
})
