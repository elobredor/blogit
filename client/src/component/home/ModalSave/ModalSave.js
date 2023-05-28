import { Modal, View, Text } from "react-native";
import { styles } from "./ModalSaveStyles";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

const ModalSave = ({ alert, setAlert }) => {
  const navigation = useNavigation();
  const boardName = "Leer más tarde";

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2200);
  }, [alert]);

  return (
    <Modal visible={alert} transparent animationType="fade">
      <View style={styles.modalBg}>
        <View style={styles.modalContainer}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.info}>Guardado en </Text>
            <Text style={styles.boardName}> Leer más tarde</Text>
          </View>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("savedTab")}
          >
            Colecciones
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalSave;
