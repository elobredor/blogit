import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import ArticleScreen from "../screens/article/ArticleScreen";
import ArticleHeader from "../component/article/ArticleHeader";
import CommentsScreen from "../screens/article/comments/CommentsScreen";
import AccountStack from "./AccountStack";
import { useFonts, Arimo_500Medium } from '@expo-google-fonts/arimo';


const Stack = createNativeStackNavigator();

const HomeStack = () => {
  let [loadedFonts] = useFonts({ Arimo_500Medium });

  if(!loadedFonts) return null;
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
          headerLeft: () => <ArticleHeader />,
          headerStyle: { backgroundColor: '#020123' },
        }}
      />
      <Stack.Screen
        name="comments"
        component={CommentsScreen}
        options={{
          title: 'Comentarios',
          headerTintColor: '#f5f5f5',
          headerTitleStyle: { fontSize: 22, fontFamily: 'Arimo_500Medium' },
          headerStyle: { backgroundColor: '#020123' },
        }}
      />
      <Stack.Screen
        name="account"
        component={AccountStack}
        options={{
          title: 'Log In',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
