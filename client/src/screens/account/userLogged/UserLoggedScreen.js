import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './userLoggedScreen.styles';
import { useSelector } from 'react-redux';
import { iconsProfile } from '../../../utils/iconOptions';

const UserLoggedScreen = () => {
  const loggedUser = useSelector(state => state.loggedUser)
  return (
    <View style={styles.container}>
      <Image source={{ uri: loggedUser.profileImage }} style={styles.profileImage}/>
      <Text style={styles.userName}>{loggedUser.userName}</Text>
      <View style={styles.subContainer}>
        <TextInput placeholder='Habla de tí...' multiline style={styles.textInput}/>
        <TouchableOpacity>
          <View style={styles.links}>
            {iconsProfile.plus}
            <Text style={styles.linksText}>Agrega tus enlaces</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
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
        <TouchableOpacity>
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
