import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/account/AccountScreen';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='accountStack' component={AccountScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AccountStack;
