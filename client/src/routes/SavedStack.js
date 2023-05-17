import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SavedScreen from '../screens/saved/SavedScreen';

const Stack = createNativeStackNavigator();

const SavedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='saved' component={SavedScreen} />
    </Stack.Navigator>
  );
};

export default SavedStack;
