import { useEffect } from 'react';
import { styles } from './ModalLogin.styles.js';
import { View, Text, Button, Modal, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/actions.js';
// import {
//   ALECTO,
//   CHRONOS64,
//   VITAE,
//   ARIADNA,
//   MEGA_BEATS,
//   TENBU_HORIN,
//   YEMONJA,
//   NORVEGICUS,
//   DIGITAL_DREAMER,
//   NO_COUNTRY,
// } from 'react-native-dotenv';
import { useAuth0 } from 'react-native-auth0';

export function ModalLogin({ modalVisibility, setModalVisibility }) {
  const dispatch = useDispatch();
  const { authorize } = useAuth0();

  const login = async () => {
    try {
      await authorize(
        { scope: 'openid profile email' },
        { customScheme: 'blogit' }
      );
      dispatch(logIn(user.email));
      setModalVisibility(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal visible={modalVisibility} animationType='fade' transparent>
      <View style={styles.modalBack}>
        <View style={styles.modalFront}>
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setModalVisibility(false)}
          >
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.loginText}>Debes ser un usuario</Text>
            <Text style={styles.loginText}>registrado{'\n'}</Text>
            <Button title='log in' onPress={login} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
