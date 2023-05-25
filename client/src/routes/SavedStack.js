import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SavedScreen from "../screens/saved/SavedScreen";
import CollectionScreen from "../screens/saved/collection/CollectionScreen";

const Stack = createNativeStackNavigator();

const SavedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Guardados" component={SavedScreen} />
      <Stack.Screen name="collection" component={CollectionScreen} />
    </Stack.Navigator>
  );
};

export default SavedStack;
