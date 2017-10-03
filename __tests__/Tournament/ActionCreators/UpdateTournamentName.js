import {Types} from '../../../src/Shared/Actions'
import UpdateTournamentName from '../../../src/Tournament/ActionCreators/UpdateTournamentName'

describe('ShowSaveModal', () => {
    it('should create an action to update the tournament name', () => {
        const newName = 'Wimbledon'
        const expected = { type: Types.TOURNAMENT_UPDATE_NAME, name: newName }

        expect(UpdateTournamentName(newName)).toEqual(expected)
    })
})
