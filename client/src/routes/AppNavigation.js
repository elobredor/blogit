import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { iconOptions } from "../utils/iconOptions";
import AccountStack from "./AccountStack";
import HomeStack from "./HomeStack";
import SavedStack from "./SavedStack";

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="homeTab"
        component={HomeStack}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.home.focused : iconOptions.home.default,
        }}
      />
      <Tab.Screen
        name="savedTab"
        component={SavedStack}
        options={{
          title: "Saved",
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.saved.focused : iconOptions.saved.default,
        }}
      />
      <Tab.Screen
        name="accountTab"
        component={AccountStack}
        options={{
          title: "Account",
          tabBarIcon: ({ focused }) =>
            focused ? iconOptions.account.focused : iconOptions.account.default,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
