import React, { useState, useEffect } from 'react';
import UserLoggedScreen from './userLogged/UserLoggedScreen';
import UserGuestScreen from './userGuest/UserGuestScreen';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { toggleLogged } from '../../redux/actions';

const AccountScreen = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const hasLogged = useSelector((state) => state.logged);
  console.log(hasLogged);

  useEffect(() => {
    const loadHasLoggedFromStorage = async () => {
      try {
        const storedHasLogged = await AsyncStorage.getItem('@hasLogged');
        if (storedHasLogged) {
          dispatch(toggleLogged());
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadHasLoggedFromStorage();
  }, []);

  if (isLoading) return <Text>Cargando.....</Text>;

  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
};

export default AccountScreen;
