import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import ArticleScreen from "../screens/article/ArticleScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="article"
        component={ArticleScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
