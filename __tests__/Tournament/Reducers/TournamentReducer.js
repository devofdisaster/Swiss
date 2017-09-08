import InitialState from '../../../src/Shared/InitialState'
import TournamentReducer from '../../../src/Tournament/Reducers/TournamentReducer'
import ShowLoadModal from '../../../src/Tournament/ActionCreators/ShowLoadModal'
import ShowSaveModal from '../../../src/Tournament/ActionCreators/ShowSaveModal'
import HideLoadModal from '../../../src/Tournament/ActionCreators/HideLoadModal'
import HideSaveModal from '../../../src/Tournament/ActionCreators/HideSaveModal'
import HideTournamentModals from '../../../src/Tournament/ActionCreators/HideTournamentModals'

jest.mock('../../../src/Shared/InitialState');

describe('TournamentReducer', () => {
    const state = {
        name: 'Test Tournament',
        loading: false,
        saveModal: false,
        loadModal: false
    }

    it('shows load modal on Tournament/ShowLoadModal', () => {
        expect(TournamentReducer(state, ShowLoadModal())).toEqual(
            {
                name: 'Test Tournament',
                loading: false,
                saveModal: false,
                loadModal: true
            }
        )
    })

    it('shows save modal on Tournament/ShowSaveModal', () => {
        expect(TournamentReducer(state, ShowSaveModal())).toEqual(
            {
                name: 'Test Tournament',
                loading: false,
                saveModal: true,
                loadModal: false
            }
        )
    })

    it('hides load modal on Tournament/HideLoadModal', () => {
        expect(TournamentReducer({...state, loadModal: true}, HideLoadModal())).toEqual(
            {
                name: 'Test Tournament',
                loading: false,
                saveModal: false,
                loadModal: false
            }
        )
    })

    it('hides save modal on Tournament/HideSaveModal', () => {
        expect(TournamentReducer({...state, saveModal: true}, HideSaveModal())).toEqual(
            {
                name: 'Test Tournament',
                loading: false,
                saveModal: false,
                loadModal: false
            }
        )
    })

    it('hides both modals on Tournament/HideModals', () => {
        expect(TournamentReducer({...state, saveModal: true}, HideTournamentModals())).toEqual(
            {
                name: 'Test Tournament',
                loading: false,
                saveModal: false,
                loadModal: false
            }
        )

        expect(TournamentReducer({...state, loadModal: true}, HideTournamentModals())).toEqual(
            {
                name: 'Test Tournament',
                loading: false,
                saveModal: false,
                loadModal: false
            }
        )
    })
})
