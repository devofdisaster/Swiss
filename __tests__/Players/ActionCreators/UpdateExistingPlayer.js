import UpdateExistingPlayer from '../../../src/Players/ActionsCreators/UpdateExistingPlayer'
import { Types } from '../../../src/Shared/Actions'
import { NavigationActions } from 'react-navigation'

describe('UpdateExistingPlayer', () => {
    it('should dispatch three specific actions', () => {
        const actualActions = []
        const dispatch = (action) => actualActions.push(action.type)
        const expectedActions = [Types.PLAYERS_SAVE_EXISTING, Types.PLAYERS_LIST_REFRESH, NavigationActions.BACK]
        const player = { id: 'existingplayer', nickname: 'existingplayer' }

        UpdateExistingPlayer(player)(dispatch)

        expect(actualActions).toEqual(expectedActions)
    })
})

