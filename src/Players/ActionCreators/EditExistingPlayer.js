import { NavigationActions } from 'react-navigation'

export default (id) => NavigationActions.navigate({
    routeName: 'EditPlayer',
    params: { title: 'Edit player', id }
})
