import AddNewRound from '../../../src/Rounds/ActionCreators/AddNewRound'
import { Types } from '../../../src/Shared/Actions'

describe('AddNewRound', () => {
    it('should create an action to add a new round to the app state', () => {
        const expected = { type: Types.ROUNDS_ADD_NEW, matches: {}, rounds: [], players: {} }

        expect(AddNewRound({ matches: {}, rounds: [], players: {}})).toEqual(expected)
    })
})


