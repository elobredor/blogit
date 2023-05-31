import { Modal, View, Text } from "react-native";
import { styles } from "./ModalSaveStyles";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import SelectBoard from "../selectBoard/SelectBoard.js";

const ModalSave = ({ alert, setAlert, data }) => {
  const [visible, setVisible] = useState(false); // estado de Modal collection // Elegir tablero
  const navigation = useNavigation();
  const boardName = "Todos los artículos";

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2800);
  }, [alert]);

  return (
    <View>
      <Modal visible={alert} transparent animationType="fade">
        <View style={styles.modalBg}>
          <View style={styles.modalContainer}>
            <View style={{}}>
              <Text style={styles.info}>Guardado en </Text>
              <Text style={styles.boardName}>Todos los artículos</Text>
            </View>
            <Text style={styles.link} onPress={() => setVisible(true)}>
              Colecciones
            </Text>
          </View>
        </View>
      </Modal>
      <SelectBoard visible={visible} setVisible={setVisible} data={data} />
    </View>
  );
};

export default ModalSave;
