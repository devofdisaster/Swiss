import RefreshPlayerList from '../../../src/Players/ActionsCreators/RefreshPlayerList'
import { Types } from '../../../src/Shared/Actions'

describe('RefreshPlayerList', () => {
    it('should create an action to refresh player list', () => {
        const expected = {type: Types.PLAYERS_LIST_REFRESH }

        expect(RefreshPlayerList()).toEqual(expected)
    })
})

