import uuid from 'uuid'
import { NavigationActions } from 'react-navigation'
import SaveNewPlayer from './SaveNewPlayer'
import RefreshPlayerList from './RefreshPlayerList'

export default function CreateNewPlayer(player) {
    player.id = uuid()
    player.enabled = true

    return (dispatch) => {
        dispatch(SaveNewPlayer(player))
        dispatch(RefreshPlayerList())
        dispatch(NavigationActions.back())
    }
}
