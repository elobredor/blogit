import { View, Text, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { useEffect, useState } from 'react';
import styles from './userLoggedScreen.styles';
import { logOut, logToDb } from '../../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { iconsProfile } from '../../../utils/iconOptions';
import { useNavigation } from '@react-navigation/native';
import { MY_IP } from 'react-native-dotenv';
import { useAuth0 } from 'react-native-auth0';
import { useFonts, Arimo_400Regular, Arimo_700Bold } from '@expo-google-fonts/arimo';
import { Nunito_400Regular } from '@expo-google-fonts/nunito';

const UserLoggedScreen = () => {
  let [loadedFonts] = useFonts({
    Arimo_400Regular,
    Nunito_400Regular,
    Arimo_700Bold,
  });
  const dispatch = useDispatch();
  const [about, setAbout] = useState('');
  const [withAbout, setWithAbout] = useState(false);
  const loggedUser = useSelector(state => state.loggedUser);
  const navigation = useNavigation();
  const { clearSession } = useAuth0();

  useEffect(() => {
    loggedUser.about && setWithAbout(true);
  }, [])

  const handleAboutChange = (text) => {
    setAbout(text);
  };

  const handleAboutSubmit = () => {
    const aboutBody = {
      about,
    }
    fetch(`https://blogit.up.railway.app/api/users/update/${loggedUser.userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(aboutBody)
    })
      .then(res => {
        if (!res.ok) throw new Error('Something went wrong');
        dispatch(logToDb(loggedUser.userId));
        setWithAbout(true);
      })
      .catch(error => console.error(error));
    setAbout('');
    Keyboard.dismiss();
  };

  const handleLogOut = async () => {
    await clearSession({ customScheme: 'blogit' });
    navigation.goBack();
    dispatch(logOut());
  };

  if (!loadedFonts) return null;
  return (
    <View style={styles.container}>
      <Image source={{ uri: loggedUser.profileImage }} style={styles.profileImage} />
      <Text style={styles.userName}>{`${loggedUser.userName[0].toUpperCase()}${loggedUser.userName.slice(1)}`}</Text>
      {loggedUser.about &&
        <View style={{width: '75%'}}>
          <Text style={{ color: '#f5f5f5', marginTop: 30 }}>{loggedUser.about}</Text>
        </View>}
      <View style={styles.subContainer}>
        {!withAbout && <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor={'#f5f5f5'}
            placeholder='Habla de tí...' multiline
            style={styles.textInput}
            value={about}
            onChangeText={handleAboutChange}
          />
          <TouchableOpacity onPress={handleAboutSubmit}>
            {iconsProfile.submit}
          </TouchableOpacity>
        </View>}
        <TouchableOpacity>
          <View style={styles.links}>
            {iconsProfile.plus}
            <Text style={styles.linksText}>Agrega tus enlaces</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('favoritesStack', loggedUser._id)}>
          <View style={styles.links}>
            {iconsProfile.heart}
            <Text style={styles.linksText}>Me gusta</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.links}>
            {iconsProfile.saved}
            <Text style={styles.linksText}>Guardados</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogOut}>
          <View style={styles.links}>
            {iconsProfile.logout}
            <Text style={styles.linksText}>Cerrar Sesión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserLoggedScreen;
