import { styles } from './userGuestScreen.styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogged } from '../../../redux/actions';
import { View, Text, Button, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { useState, useEffect } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

// http://localhost:4000/api/users/create

const UserGuestScreen = () => {
  const [userInfo, setUserInfo] = useState(null);
  const dispatch = useDispatch();

  // web: 573500708494-6ohbfi2qlh2e6ph2e2ii9ddfh82nu2pp.apps.googleusercontent.com

  const [request, response, prompAsync] = Google.useAuthRequest({
    expoClientId:
      '573500708494-te34j19mkhsfb3ievkb2hco135t2qcp9.apps.googleusercontent.com',
    iosClientId:
      '573500708494-tpuqg9n5ltnfe32r9smgk9mrep7iomej.apps.googleusercontent.com',
    androidClientId:
      '573500708494-te34j19mkhsfb3ievkb2hco135t2qcp9.apps.googleusercontent.com',
  });

  useEffect(() => {
    handleSignInWithGoogle();
  }, [response]);

  useEffect(() => {
    if (userInfo) {
      dispatch(toggleLogged(userInfo));
    }
  }, [userInfo]);

  const handleSignInWithGoogle = async () => {
    const user = await getLocalUser();
    if (user) {
      setUserInfo(user);
      dispatch(toggleLogged(userInfo));
    } else if (response?.type === 'success') {
      getUserInfo(response.authentication.accessToken);
    }
  };

  const getLocalUser = async () => {
    const data = await AsyncStorage.getItem('@user');
    if (!data) return null;
    return JSON.parse(data);
  };

  const getUserInfo = async (token) => {
    if (!token) return null;

    try {
      const response = await fetch(
        'https://www.googleapis.com/userinfo/v2/me',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      await AsyncStorage.setItem('@user', JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFakeLogin = () => {
    const fakeUser = {
      picture:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      name: 'María García',
      email: 'maria.garcia@example.com',
      id: '1234567890',
    };

    dispatch(toggleLogged(fakeUser));
    setUserInfo(fakeUser);
  };

  return (
    <View>
      <Button onPress={handleFakeLogin} title='Log in' />
      <View>
        <Button
          title='Log In With Google'
          disabled={!request}
          onPress={() => {
            prompAsync();
          }}
        />

        <Button
          title='Log out'
          onPress={async () => await AsyncStorage.removeItem('@user')}
        />
      </View>
    </View>
  );
};

export default UserGuestScreen;
