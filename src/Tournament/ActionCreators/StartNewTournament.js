import {Types} from '../../Shared/Actions'
import {NavigationActions} from 'react-navigation'

export default () => (dispatch) => {
    dispatch({ type: Types.TOURNAMENT_START_NEW })
    dispatch(NavigationActions.navigate({ routeName: 'players' }))
}
