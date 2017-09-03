import ShowPlayerDetails from '../../../src/Players/ActionsCreators/ShowPlayerDetails'
import { NavigationActions } from 'react-navigation'

describe('ShowPlayerDetails', () => {
    it('should create a navigation action to open player details screen for given player id', () => {
        const expected = {
            type: NavigationActions.NAVIGATE,
            routeName: 'PlayerDetails',
            params: { id: 'some-id' }
        }

        expect(ShowPlayerDetails('some-id')).toEqual(expected)
    })
})

