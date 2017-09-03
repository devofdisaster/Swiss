import OpenDrawer from '../../../../src/Shared/ActionCreators/OpenDrawer'
import { NavigationActions } from 'react-navigation'

describe('OpenDrawer', () => {
    it('Should create a navigation action to open drawer', () => {
        const expected = {
            type: NavigationActions.NAVIGATE,
            routeName: 'DrawerOpen'
        }

        expect(OpenDrawer()).toEqual(expected)
    })
})
