import { NavigationContainer } from '@react-navigation/native';
import AccountScreen from './src/screens/account/AccountScreen';
import AppNavigation from './src/routes/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
