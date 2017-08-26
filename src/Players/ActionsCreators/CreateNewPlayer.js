import uuid from 'uuid'
import { NavigationActions } from 'react-navigation'
import SaveNewPlayer from './SaveNewPlayer'
import AddPlayerToList from './AddPlayerToList'

export default function CreateNewPlayer(player) {
    player.id = uuid()

    return (dispatch) => {
        dispatch(SaveNewPlayer(player))
        dispatch(AddPlayerToList(player))
        dispatch(NavigationActions.back())
    }
}
