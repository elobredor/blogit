import { styles } from "./ModalLogin.styles.js";
import {
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from "react-redux";
import { logToDb } from '../../redux/actions.js';
import { LOGGED_USER } from "react-native-dotenv";

export function ModalLogin({ modalVisibility, setModalVisibility }) {
  const dispatch = useDispatch();

  const logIn = () => {
    dispatch(logToDb(LOGGED_USER))
    setModalVisibility(false);
  };

  return (
    <Modal visible={modalVisibility} animationType='fade' transparent>
      <View style={styles.modalBack}>
        <View style={styles.modalFront}>
          <TouchableOpacity style={styles.closeBtn} onPress={() => setModalVisibility(false)}>
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>Debes ser un usuario registrado</Text>
          <Button title='log in' onPress={logIn} />
        </View>
      </View>
    </Modal>
  );
}
