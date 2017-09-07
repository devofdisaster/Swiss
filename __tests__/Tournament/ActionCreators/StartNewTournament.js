import StartNewTournament from '../../../src/Tournament/ActionCreators/StartNewTournament'
import { Types } from '../../../src/Shared/Actions'
import { NavigationActions } from 'react-navigation'

describe('StartNewTournament', () => {
    it('should dispatch two specific actions', () => {
        const actualActions = []
        const dispatch = (action) => actualActions.push(action)
        const expectedActions = [
            { type: Types.TOURNAMENT_START_NEW },
            { type: NavigationActions.NAVIGATE, routeName: 'players' }
        ]

        StartNewTournament()(dispatch)

        expect(actualActions).toEqual(expectedActions)
    })
})


