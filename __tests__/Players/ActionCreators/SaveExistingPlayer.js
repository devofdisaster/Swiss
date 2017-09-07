import SaveExistingPlayer from '../../../src/Players/ActionCreators/SaveExistingPlayer'
import { Types } from '../../../src/Shared/Actions'

describe('SaveExistingPlayer', () => {
    it('should create an action to save an existing player', () => {
        const player = { id: 'existingplayer', nickname: 'existingplayer' }
        const expected = { type: Types.PLAYERS_SAVE_EXISTING, player }

        expect(SaveExistingPlayer(player)).toEqual(expected)
    })
})

