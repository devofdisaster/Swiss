import { NavigationActions } from 'react-navigation'

export default (index) => NavigationActions.navigate({ routeName: `Round-${index + 1}` })
