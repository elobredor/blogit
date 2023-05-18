import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import ArticleScreen from "../screens/article/ArticleScreen";
import ArticleHeader from "../component/article/ArticleHeader";
import CommentsScreen from "../screens/article/comments/CommentsScreen";

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
        options={{
          headerTitle: () => null,
          headerLeft: () => <ArticleHeader />
        }}
      />
      <Stack.Screen
        name="comments"
        component={CommentsScreen}
        options={{
          headerTitle: () => null,
          headerLeft: () => <ArticleHeader />
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
