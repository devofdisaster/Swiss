import {Types} from '../../../src/Shared/Actions'
import ShowSaveModal from '../../../src/Tournament/ActionCreators/ShowSaveModal'

describe('ShowSaveModal', () => {
    it('should create an action to show modal for saving the tournament', () => {
        const expected = { type: Types.TOURNAMENT_SHOW_SAVE_MODAL }

        expect(ShowSaveModal()).toEqual(expected)
    })
})
