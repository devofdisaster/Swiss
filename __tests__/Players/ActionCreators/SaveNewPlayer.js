import SaveNewPlayer from '../../../src/Players/ActionCreators/SaveNewPlayer'
import { Types } from '../../../src/Shared/Actions'

describe('SaveNewPlayer', () => {
    it('should create an action to add given player to list', () => {
        const player = { id: 'newplayer', nickname: 'newplayer' }
        const expected = { type: Types.PLAYERS_SAVE_NEW, player }

        expect(SaveNewPlayer(player)).toEqual(expected)
    })
})

