import { NavigationActions } from 'react-navigation'
import SaveExistingPlayer from './SaveExistingPlayer'
import RefreshPlayerList from './RefreshPlayerList'

export default function UpdateExistingPlayer(player) {
    return (dispatch) => {
        dispatch(SaveExistingPlayer(player))
        dispatch(RefreshPlayerList())
        dispatch(NavigationActions.back())
    }
}
