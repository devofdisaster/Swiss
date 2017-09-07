import AttemptDisablePlayer from '../../../src/Players/ActionCreators/AttemptDisablePlayer'
import { Types } from '../../../src/Shared/Actions'

describe('AttemptDisablePlayer', () => {
    it('should dispatch disable action if any rounds have begun', () => {
        const actualActions = []
        const dispatch = (action) => actualActions.push(action)
        const getState = () => ({ rounds: [ {} ] })
        const expectedActions = [{ type: Types.PLAYERS_DISABLE, id: 'some-id'}]

        AttemptDisablePlayer('some-id')(dispatch, getState)

        expect(actualActions).toEqual(expectedActions)
    })

    it('should dispatch delete action if no rounds have begun', () => {
        const actualActions = []
        const dispatch = (action) => actualActions.push(action)
        const getState = () => ({ rounds: [] })
        const expectedActions = [{ type: Types.PLAYERS_DELETE, id: 'some-id'}]

        AttemptDisablePlayer('some-id')(dispatch, getState)

        expect(actualActions).toEqual(expectedActions)
    })
})

