import {Types} from '../../../src/Shared/Actions'
import ShowLoadModal from '../../../src/Tournament/ActionCreators/ShowLoadModal'

describe('ShowLoadModal', () => {
    it('should create an action to show modal for loading the tournament', () => {
        const expected = { type: Types.TOURNAMENT_SHOW_LOAD_MODAL }

        expect(ShowLoadModal()).toEqual(expected)
    })
})
