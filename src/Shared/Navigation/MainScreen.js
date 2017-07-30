import { DrawerNavigator } from 'react-navigation';
import RegistrationTab from './RegistrationTab';
import RoundsTab from './RoundTab';
import StandingsTab from './StandingsTab';

export default MainScreen = DrawerNavigator(
    {
        attendees: { screen: RegistrationTab },
        routes: { screen: RoundsTab },
        standings: { screen: StandingsTab }
    },
    { initialRouteName: 'attendees' }
);
