import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './SocialMediaScreen.styles';
import { useFonts, Arimo_500Medium } from '@expo-google-fonts/arimo';
import { iconsSocialMedia } from '../../../../utils/iconOptions';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logToDb } from '../../../../redux/actions';

const SocialMediaScreen = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);
  let [loadedFonts] = useFonts({
    Arimo_500Medium,
  });
  const navigation = useNavigation();
  const [link1, setLink1] = useState('');
  const [link2, setLink2] = useState('');
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (loggedUser.socialNetwork1) {
      setLink1(loggedUser.socialNetwork1)
    }
    if (loggedUser.socialNetwork2) {
      setLink2(loggedUser.socialNetwork2)
    }
  }, [loggedUser])

  const handleChange1 = (text) => {
    setLink1(text);
  };

  const handleChange2 = (text) => {
    setLink2(text);
  };

  const handleSubmitLinks = () => {
    const linksBody = {
      socialNetwork1: link1,
      socialNetwork2: link2,
    };
    fetch(`https://blogit.up.railway.app/api/users/update/${loggedUser.userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(linksBody),
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong');
        dispatch(logToDb(loggedUser.userId));
        navigation.goBack();
      })
      .catch((error) => console.error(error));
  };

  if (!loadedFonts) return <View style={styles.container}></View>;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', gap: 15 }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {iconsSocialMedia.cross}
          </TouchableOpacity>
          <Text style={styles.header}>Enlaces</Text>
        </View>
        <TouchableOpacity onPress={handleSubmitLinks}>
          {iconsSocialMedia.check}
        </TouchableOpacity>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          placeholder='Agrega tu enlace'
          placeholderTextColor='#959595'
          style={styles.linkInput}
          value={link1}
          onChangeText={handleChange1}
        />
        {link1 && <TouchableOpacity onPress={() => setLink1('')}>
          <Text style={styles.deleteBtn}>Eliminar enlace</Text>
        </TouchableOpacity>}
        <TextInput
          placeholder='Agrega tu enlace'
          placeholderTextColor='#959595'
          style={styles.linkInput}
          value={link2}
          onChangeText={handleChange2}
        />
        {link2 && <TouchableOpacity onPress={() => setLink2('')}>
          <Text style={styles.deleteBtn}>Eliminar enlace</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
};

export default SocialMediaScreen;
