import { View, Text, Image, TextInput, TouchableOpacity, Keyboard, Linking } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import styles from './userLoggedScreen.styles';
import { logOut, logToDb } from '../../../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { iconsProfile } from '../../../utils/iconOptions';
import { useNavigation } from '@react-navigation/native';
import { useAuth0 } from 'react-native-auth0';
import { useFonts, Arimo_400Regular, Arimo_700Bold } from '@expo-google-fonts/arimo';
import { Nunito_400Regular } from '@expo-google-fonts/nunito';
import socialMediaIconize from '../../../utils/socialMediaIconize';

const UserLoggedScreen = () => {
  const aboutInput = useRef(null);
  const token = useSelector((state) => state.token);
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
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
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

  const handleEditAbout = () => {
    setAbout(loggedUser.about);
    setWithAbout(false);
  };

  useEffect(() => {
    if (aboutInput.current) {
      setTimeout(() => {
        aboutInput.current.focus();
      }, 10)
    }
  }, [withAbout])

  if (!loadedFonts) return null;
  return (
    <View style={styles.container}>
      <Image source={{ uri: loggedUser.profileImage }} style={styles.profileImage} />
      <Text style={styles.userName}>{`${loggedUser.userName[0].toUpperCase()}${loggedUser.userName.slice(1)}`}</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center', gap: 10 }}>
        {loggedUser.socialNetwork1 &&
          <TouchableOpacity onPress={() => Linking.openURL(loggedUser.socialNetwork1)}>
            {socialMediaIconize(loggedUser.socialNetwork1)}
          </TouchableOpacity>}
        {loggedUser.socialNetwork2 &&
          <TouchableOpacity onPress={() => Linking.openURL(loggedUser.socialNetwork2)}>
            {socialMediaIconize(loggedUser.socialNetwork2)}
          </TouchableOpacity>}
      </View>
      {loggedUser.about && withAbout === true &&
        <View style={styles.aboutContainer}>
          <View style={styles.aboutSubContainer}>
            <Text style={{ color: '#f5f5f5' }}>{loggedUser.about}</Text>
            <TouchableOpacity onPress={handleEditAbout}>
              {iconsProfile.edit}
            </TouchableOpacity>
          </View>
        </View>}
      <View style={styles.subContainer}>
        {!withAbout && <View style={styles.inputContainer}>
          <TextInput
            ref={aboutInput}
            placeholderTextColor={'#f5f5f5'}
            placeholder='Habla de tí...' multiline
            style={styles.textInput}
            value={about}
            onChangeText={handleAboutChange}
          />
          <TouchableOpacity onPress={handleAboutSubmit}>
            {about.length ? <Image
              source={require('../../../../assets/send-active.png')}
              style={{ width: 22, height: 22, marginTop: 5, marginRight: 5 }}
            /> :
              <Image
                source={require('../../../../assets/send-inactive.png')}
                style={{ width: 22, height: 22, marginTop: 5, marginRight: 5 }}
              />}
          </TouchableOpacity>
        </View>}
        <TouchableOpacity onPress={() => navigation.navigate('socialMedia')}>
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
        <TouchableOpacity onPress={() => navigation.navigate('savedTab')}>
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
