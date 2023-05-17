import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountStack from './AccountStack';
import HomeStack from './HomeStack';
import SavedStack from './SavedStack';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='homeTab' component={HomeStack} />
      <Tab.Screen name='savedTab' component={SavedStack} />
      <Tab.Screen name='accountTab' component={AccountStack} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
