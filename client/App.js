import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigation from './src/routes/AppNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Auth0Provider } from 'react-native-auth0';

const App = () => {
  return (
    <Provider store={store}>
      <Auth0Provider domain={'blog-it.us.auth0.com'} clientId={'lvAvbFNwHEDiOk5tinGagCYt5ytTpv2O'}>
        <NavigationContainer>
          <AppNavigation />
          <StatusBar translucent={false} style={'light'} />
        </NavigationContainer>
      </Auth0Provider>
    </Provider>
  );
};

export default App;
