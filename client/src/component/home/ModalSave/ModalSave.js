import { Modal, View, Text } from "react-native";
import { styles } from "./ModalSaveStyles";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

const ModalSave = ({ alert, setAlert }) => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2500);
  }, [alert]);

  return (
    <Modal visible={alert} transparent animationType="fade">
      <View style={styles.modalBack}>
        <View style={styles.modalFront}>
          <Text>Guardado en Leer más tarde</Text>
          <Text>Colecciones</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSave;
