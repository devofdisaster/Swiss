import DisablePlayer from '../../../src/Players/ActionCreators/DisablePlayer'
import { Types } from '../../../src/Shared/Actions'

describe('DisablePlayer', () => {
    it('should create an action to disable a player', () => {
        const expected = { type: Types.PLAYERS_DISABLE, id: 'some-id' }

        expect(DisablePlayer('some-id')).toEqual(expected)
    })
})

