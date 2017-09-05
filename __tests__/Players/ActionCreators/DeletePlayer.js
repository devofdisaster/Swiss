import DeletePlayer from '../../../src/Players/ActionsCreators/DeletePlayer'
import { Types } from '../../../src/Shared/Actions'

describe('DeletePlayer', () => {
    it('should create an action to delete a player', () => {
        const expected = { type: Types.PLAYERS_DELETE, id: 'some-id' }

        expect(DeletePlayer('some-id')).toEqual(expected)
    })
})

