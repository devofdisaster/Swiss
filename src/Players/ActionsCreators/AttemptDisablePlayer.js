import DisablePlayer from './DisablePlayer'
import DeletePlayer from './DeletePlayer'

export default (id) => (dispatch, getState) => {
    const rounds = getState().rounds

    if (!rounds.length) {
        dispatch(DeletePlayer(id))
    } else {
        dispatch(DisablePlayer(id))
    }
}
