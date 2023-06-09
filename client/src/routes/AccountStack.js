import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/account/AccountScreen';
import FavoritesScreen from '../screens/favorites/FavoritesScreen';
import { useFonts, Arimo_500Medium } from '@expo-google-fonts/arimo';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  let [loadedFonts] = useFonts({ Arimo_500Medium });

  if (!loadedFonts) return null;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='accountStack'
        component={AccountScreen}
        options={{
          headerTintColor: '#f5f5f5',
          headerStyle: {backgroundColor: '#020123'},
          headerTitleStyle: { fontFamily: 'Arimo_500Medium', fontSize: 22 },
          title: 'Perfil'
        }}
      />
      <Stack.Screen
        name='favoritesStack'
        component={FavoritesScreen}
        options={{
          headerTintColor: '#f5f5f5',
          headerStyle: {backgroundColor: '#020123'},
          headerTitleStyle: { fontFamily: 'Arimo_500Medium', fontSize: 22 },
          title: 'Me Gusta',
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
