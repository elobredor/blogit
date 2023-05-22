import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { styles } from './userLoggedScreen.styles';
import { useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { toggleLogged } from '../../../redux/actions';
import { useNavigation } from '@react-navigation/native';
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';

const UserLoggedScreen = () => {
  const userInfo = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log(userInfo);

  const logout = async () => {
    await AsyncStorage.removeItem('@user');
    dispatch(toggleLogged());
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          {userInfo?.picture && (
            <Image source={{ uri: userInfo?.picture }} style={styles.avatar} />
          )}
        </View>
        <View>
          <Text>Email: {userInfo?.email}</Text>
          <Text>Name: {userInfo?.name}</Text>
        </View>
      </View>

      <View style={styles.boxBtns}>
        <View style={styles.btnBox}>
          <AntDesign name='hearto' size={24} color='black' />
          <Button color='black' title='Me Gusta' onPress={() => {}} />
        </View>

        <View style={styles.btnBox}>
          <MaterialCommunityIcons
            color='black'
            size={24}
            name='bookmark-outline'
          />
          <Button
            color='black'
            title='Guardados'
            onPress={() => navigation.navigate('savedTab')}
          />
        </View>

        <View style={styles.btnBox}>
          <Ionicons name='power' size={24} color='red' />
          <Button title='Cerrar Sesión' onPress={logout} color='red' />
        </View>
        <View style={styles.btnBox}>
          <TouchableOpacity
            onPress={logout}
            activeOpacity={0.7}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
              backgroundColor: 'white',
              paddingHorizontal: 30,
              paddingVertical: 8,
              borderRadius: 50,
              elevation: 5,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3,
            }}
          >
            <Ionicons name='power' size={24} color='red' />
            <Text style={{ color: 'red', fontSize: 16, fontWeight: '600' }}>
              Cerrar Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserLoggedScreen;
