import SwipeToRound from '../../../src/Rounds/ActionCreators/SwipeToRound'
import { NavigationActions } from 'react-navigation'

describe('SwipeToRound', () => {
    it('should create a navigation action to scroll the rounds view to the given round tab', () => {
        const expected = { type: NavigationActions.NAVIGATE, routeName: `Round-3`, index: 2 }

        expect(SwipeToRound(2)).toEqual(expected)
    })
})


