import {Types} from '../../../src/Shared/Actions'
import HideSaveModal from '../../../src/Tournament/ActionCreators/HideSaveModal'

describe('HideSaveModal', () => {
    it('should create an action to hide modal for saving the tournament', () => {
        const expected = { type: Types.TOURNAMENT_HIDE_SAVE_MODAL }

        expect(HideSaveModal()).toEqual(expected)
    })
})
