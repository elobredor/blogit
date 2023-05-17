import { NavigationContainer } from '@react-navigation/native';
import AccountScreen from './src/screens/account/AccountScreen';
import AppNavigation from './src/routes/AppNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default App;
