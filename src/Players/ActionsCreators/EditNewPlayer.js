import { NavigationActions } from 'react-navigation'

export default () => NavigationActions.navigate({
    routeName: 'EditPlayer',
    params: { title: 'Add player' }
})
