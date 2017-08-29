import PlayersListReducer   from '../../../src/Players/Reducers/PlayersListReducer'
import RefreshPlayerList    from '../../../src/Players/ActionsCreators/RefreshPlayerList'
import ChangeDisplayedStat  from '../../../src/Players/ActionsCreators/ChangeDisplayedStat'

jest.mock('../../../src/Shared/InitialState');

describe('PlayersListReducer', () => {
    const listState = { players: [], visibleStat: 'points', order: 'asc', sortBy: 'order' }
    const playersState = {}

    it('should add a player id to the end of the players list when sorted by order asc', () => {
        const expectedState = { players: ['player-five-hundred'], visibleStat: 'points', order: 'asc', sortBy: 'order'}
        const playersState = {
            ['player-five-hundred']: { id: 'player-five-hundred', nickname: 'xXxLegolas9273xXx', score: 9001 }
        }

        expect(PlayersListReducer(listState, playersState, RefreshPlayerList())).toEqual(expectedState)
    })

    it('should change visible statistic', () => {
        const newStat = 'results'
        const expectedState = { players: [], visibleStat: 'results', order: 'asc', sortBy: 'order'}

        expect(PlayersListReducer(listState, playersState, ChangeDisplayedStat(newStat))).toEqual(expectedState)
    })
})
