import React, { useState } from 'react';
import UserLoggedScreen from './userLogged/UserLoggedScreen';
import UserGuestScreen from './userGuest/UserGuestScreen';
import { Text } from 'react-native';

const AccountScreen = () => {
  const [hasLogged, setHasLogged] = useState(false);

  if (hasLogged === null) return <Text>Cargando.....</Text>;

  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
};

export default AccountScreen;
