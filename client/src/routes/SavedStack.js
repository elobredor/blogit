import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SavedScreen from "../screens/saved/SavedScreen";
import CollectionScreen from "../screens/saved/collection/CollectionScreen";
import { useFonts, Arimo_500Medium } from '@expo-google-fonts/arimo';

const Stack = createNativeStackNavigator();

const SavedStack = () => {
  let [loadedFonts] = useFonts({ Arimo_500Medium })

  if (!loadedFonts) return null;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Guardados"
        component={SavedScreen}
        options={{
          headerStyle: { backgroundColor: '#020123' },
          headerTintColor: '#f5f5f5',
          headerTitleStyle: {
            fontSize: 22,
            fontFamily: 'Arimo_500Medium'
          }
        }}
      />
      <Stack.Screen
        name="Collection"
        component={CollectionScreen}
        options={{
          headerStyle: { backgroundColor: '#020123' },
          headerTintColor: '#f5f5f5'
        }}
      />
    </Stack.Navigator>
  );
};

export default SavedStack;
