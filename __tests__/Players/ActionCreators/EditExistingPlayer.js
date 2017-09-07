import EditExistingPlayer from '../../../src/Players/ActionCreators/EditExistingPlayer'
import { NavigationActions } from 'react-navigation'

describe('EditExistingPlayer', () => {
    it('should create a navigation action to open player edition screen with no player data', () => {
        const expected = {
            type: NavigationActions.NAVIGATE,
            routeName: 'EditPlayer',
            params: { title: 'Edit player', id: 'some-id' }
        }

        expect(EditExistingPlayer('some-id')).toEqual(expected)
    })
})

