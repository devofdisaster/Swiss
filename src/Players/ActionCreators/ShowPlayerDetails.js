import { NavigationActions } from 'react-navigation'

export default (id) => NavigationActions.navigate({
    routeName: 'PlayerDetails',
    params: { id }
})
