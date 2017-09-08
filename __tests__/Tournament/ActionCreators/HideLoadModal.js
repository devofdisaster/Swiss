import {Types} from '../../../src/Shared/Actions'
import HideLoadModal from '../../../src/Tournament/ActionCreators/HideLoadModal'

describe('HideLoadModal', () => {
    it('should create an action to show modal for loading the tournament', () => {
        const expected = { type: Types.TOURNAMENT_HIDE_LOAD_MODAL }

        expect(HideLoadModal()).toEqual(expected)
    })
})
