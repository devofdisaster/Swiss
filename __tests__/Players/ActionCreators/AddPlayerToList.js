import AddPlayerToList from '../../../src/Players/ActionsCreators/AddPlayerToList'
import { Types } from '../../../src/Shared/Actions'

describe('AddPlayerToList', () => {
    it('should create an action to add given player to list', () => {
        const player = { id: 'newplayer', nickname: 'newplayer' }
        const expected = { type: Types.PLAYERS_LIST_ADD, player }

        expect(AddPlayerToList(player)).toEqual(expected)
    })
})
