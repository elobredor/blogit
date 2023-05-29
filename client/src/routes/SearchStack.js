import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen } from '../screens/search/SearchScreen';

const Stack = createNativeStackNavigator();

export const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='search'
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
