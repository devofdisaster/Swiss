import {Types} from '../../../src/Shared/Actions'
import HideTournamentModals from '../../../src/Tournament/ActionCreators/HideTournamentModals'

describe('HideTournamentModals', () => {
    it('should create an action to hide both modals in the tournament module', () => {
        const expected = { type: Types.TOURNAMENT_HIDE_MODALS }

        expect(HideTournamentModals()).toEqual(expected)
    })
})
