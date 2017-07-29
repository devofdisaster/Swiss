import { TabNavigator } from 'react-navigation';
import RegistrationTab from './MainScreenTabs/RegistrationTab';
import StandingsTab from './MainScreenTabs/StandingsTab';

export default MainScreen = TabNavigator({
    registration: { screen: RegistrationTab },
    standings: { screen: StandingsTab }
});
