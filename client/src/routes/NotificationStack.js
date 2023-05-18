import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationScreen from '../screens/notifications/NotificationScreen';

const Stack = createNativeStackNavigator();

const NotificationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Notificaciones'
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NotificationStack;
