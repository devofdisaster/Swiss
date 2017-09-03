import EnablePlayer from '../../../src/Players/ActionsCreators/EnablePlayer'
import { Types } from '../../../src/Shared/Actions'

describe('EnablePlayer', () => {
    it('should create an action to enable a player', () => {
        const expected = { type: Types.PLAYERS_ENABLE, id: 'some-id' }

        expect(EnablePlayer('some-id')).toEqual(expected)
    })
})

