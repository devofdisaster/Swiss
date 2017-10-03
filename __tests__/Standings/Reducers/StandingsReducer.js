import StandingsReducer   from '../../../src/Standings/Reducers/StandingsReducer'
import ChangeDisplayedStandingsStat  from '../../../src/Standings/ActionCreators/ChangeDisplayedStandingsStat'
import DeletePlayer from '../../../src/Players/ActionCreators/DeletePlayer'
import {Types} from '../../../src/Shared/Actions'
import LoadTournamentData from '../../../src/Tournament/ActionCreators/LoadTournamentData'
import RefreshStandings from '../../../src/Standings/ActionCreators/RefreshStandings'

jest.mock('../../../src/Shared/InitialState');

describe('StandingsReducer', () => {
    const standingsState = { players: [], visibleStat: 'points' }
    const playersState = {}

    it('should add a player id to the end of the players list when sorted by order asc', () => {
        const expectedState = { players: ['player-five-hundred'], visibleStat: 'points' }
        const playersState = {
            ['player-five-hundred']: { id: 'player-five-hundred', nickname: 'xXxLegolas9273xXx', score: 9001 }
        }

        expect(StandingsReducer(standingsState, playersState, RefreshStandings())).toEqual(expectedState)
    })

    it('should change visible statistic', () => {
        const newStat = 'results'
        const expectedState = { players: [], visibleStat: 'results' }

        expect(StandingsReducer(standingsState, playersState, ChangeDisplayedStandingsStat(newStat)))
            .toEqual(expectedState)
    })

    it('should remove player id from visible players on Players/Delete', () => {
        const standingsState = { players: ['player-five-hundred'], visibleStat: 'points' }
        const playersState = {
            ['player-five-hundred']: { id: 'player-five-hundred', nickname: 'xXxLegolas9273xXx', score: 9001 }
        }
        const expectedState = { players: [], visibleStat: 'points' }

        expect(StandingsReducer(standingsState, playersState, DeletePlayer('player-five-hundred'))).toEqual(expectedState)
    })

    it('should remove all players on Tournament/StartNew', () => {
        const standingsState = { players: ['player-five-hundred'], visibleStat: 'points' }
        const playersState = {
            ['player-five-hundred']: { id: 'player-five-hundred', nickname: 'xXxLegolas9273xXx', score: 9001 }
        }
        const expectedState = { players: [], visibleStat: 'points' }

        expect(StandingsReducer(standingsState, playersState, { type: Types.TOURNAMENT_START_NEW })).toEqual(expectedState)
    })

    it('should load new data and show points on Tournament/LoadData', () => {
        const standingsState = { players: ['player-five-hundred'], visibleStat: 'results' }
        const playersState = {
            ['player-five-hundred']: { id: 'player-five-hundred', nickname: 'xXxLegolas9273xXx', score: 9001 }
        }
        const expectedState = { players: [], visibleStat: 'points' }

        expect(StandingsReducer(standingsState, playersState, LoadTournamentData({ players: {}}))).toEqual(expectedState)
    })
})
