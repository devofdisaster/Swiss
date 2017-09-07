import { NavigationActions } from 'react-navigation'
import SaveExistingPlayer from './SaveExistingPlayer'

export default function UpdateExistingPlayer(player) {
    return (dispatch) => {
        dispatch(SaveExistingPlayer(player))
        dispatch(NavigationActions.back())
    }
}
