import {Types} from '../../../src/Shared/Actions'
import ShowModalSpinner from '../../../src/Tournament/ActionCreators/ShowModalSpinner'

describe('ShowModalSpinner', () => {
    it('should create an action to show the loading spinner in modal', () => {
        const expected = { type: Types.TOURNAMENT_SHOW_SPINNER }

        expect(ShowModalSpinner()).toEqual(expected)
    })
})
