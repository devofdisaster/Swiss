import EditNewPlayer from '../../../src/Players/ActionCreators/EditNewPlayer'
import { NavigationActions } from 'react-navigation'

describe('EditNewPlayer', () => {
    it('should create a navigation action to open player edition screen with no player data', () => {
        const expected = {
            type: NavigationActions.NAVIGATE,
            routeName: 'EditPlayer',
            params: { title: 'Add player' }
        }

        expect(EditNewPlayer()).toEqual(expected)
    })
})

