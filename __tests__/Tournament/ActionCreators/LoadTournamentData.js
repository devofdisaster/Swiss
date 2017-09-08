import {Types} from '../../../src/Shared/Actions'
import LoadTournamentData from '../../../src/Tournament/ActionCreators/LoadTournamentData'

describe('LoadTournamentData', () => {
    it('should create an action to load selected tournament data into the app', () => {
        const expected = { type: Types.TOURNAMENT_LOAD_DATA, data: { players: {'oneone': {}} } }

        expect(LoadTournamentData({ players: {'oneone' : {}}})).toEqual(expected)
    })
})
