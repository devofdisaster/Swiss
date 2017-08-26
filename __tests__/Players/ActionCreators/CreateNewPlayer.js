import CreateNewPlayer from '../../../src/Players/ActionsCreators/CreateNewPlayer'
import { Types } from '../../../src/Shared/Actions'
import { NavigationActions } from 'react-navigation'

describe('CreateNewPlayer', () => {
    it('should dispatch three specific actions', () => {
        const actualActions = []
        const dispatch = (action) => actualActions.push(action.type)
        const expectedActions = [Types.PLAYERS_SAVE_NEW, Types.PLAYERS_LIST_ADD, NavigationActions.BACK]
        const player = { id: 'newplayer', nickname: 'newplayer' }

        CreateNewPlayer(player)(dispatch)

        expect(actualActions).toEqual(expectedActions)
    })
})

