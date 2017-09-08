import PlayersListReducer   from '../../../src/Players/Reducers/PlayersListReducer'
import RefreshPlayerList    from '../../../src/Players/ActionCreators/RefreshPlayerList'
import ChangeDisplayedStat  from '../../../src/Players/ActionCreators/ChangeDisplayedStat'
import DeletePlayer from '../../../src/Players/ActionCreators/DeletePlayer'
import {Types} from '../../../src/Shared/Actions'
import LoadTournamentData from '../../../src/Tournament/ActionCreators/LoadTournamentData'

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

    it('should remove player id from visible players on Players/Delete', () => {
        const listState = { players: ['player-five-hundred'], visibleStat: 'points', order: 'asc', sortBy: 'order' }
        const playersState = {
            ['player-five-hundred']: { id: 'player-five-hundred', nickname: 'xXxLegolas9273xXx', score: 9001 }
        }
        const expectedState = { players: [], visibleStat: 'points', order: 'asc', sortBy: 'order'}

        expect(PlayersListReducer(listState, playersState, DeletePlayer('player-five-hundred'))).toEqual(expectedState)

    })

    it('should remove all players on Tournament/StartNew', () => {
        const listState = { players: ['player-five-hundred'], visibleStat: 'points', order: 'asc', sortBy: 'order' }
        const playersState = {
            ['player-five-hundred']: { id: 'player-five-hundred', nickname: 'xXxLegolas9273xXx', score: 9001 }
        }
        const expectedState = { players: [], visibleStat: 'points', order: 'asc', sortBy: 'order'}

        expect(PlayersListReducer(listState, playersState, { type: Types.TOURNAMENT_START_NEW })).toEqual(expectedState)
    })

    it('should load new data and sort by points on Tournament/LoadData', () => {
        const listState = { players: ['player-five-hundred'], visibleStat: 'points', order: 'asc', sortBy: 'order' }
        const playersState = {
            ['player-five-hundred']: { id: 'player-five-hundred', nickname: 'xXxLegolas9273xXx', score: 9001 }
        }
        const expectedState = { players: [], visibleStat: 'points', order: 'desc', sortBy: 'stat'}

        expect(PlayersListReducer(listState, playersState, LoadTournamentData({ players: {}}))).toEqual(expectedState)
    })
})
