import { TabNavigator } from 'react-navigation';
import RegistrationTab from './RegistrationTab';
import StandingsTab from './StandingsTab';

export default MainScreen = TabNavigator({
    registration: { screen: RegistrationTab },
    standings: { screen: StandingsTab }
});
