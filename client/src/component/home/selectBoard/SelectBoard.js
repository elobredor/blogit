import { Modal, View, Text, Image } from "react-native";
import { styles } from "./selectBoardStyles";
import { useNavigation } from "@react-navigation/native";
import { iconsCard, iconsArticle } from "../../../utils/iconOptions";
import { useState, useEffect } from "react";
import CreateBoard from "../createBoard/CreateBoard";

const ModalSave = ({ visible, setVisible, data }) => {
  const [showCreate, setShowCreate] = useState(false); // Estado de ModalCreateCol // crear un tablero
  const [saved, setSaved] = useState(true);
  const navigation = useNavigation();
  const boardName = "Leer más tarde";

  return (
    <>
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.modalBg}>
          <View style={styles.modalContainer}>
            {/* See Later Board */}
            <View style={styles.defaultContainer}>
              <View style={styles.leftSide}>
                <View style={styles.miniPrev}></View>
                <Text style={styles.text}>{boardName}</Text>
              </View>
              <View style={styles.rigthSide}>
                {saved ? iconsCard.saved.filled : iconsArticle.plus}
              </View>
            </View>
            {/* Info */}
            <View style={styles.infoContainer}>
              <Text onPress={() => setVisible(false)} style={styles.text}>
                Colecciones
              </Text>
              <Text
                onPress={() => {
                  setShowCreate(true);
                }}
                style={{ color: "#3B79BE" }}
              >
                Nueva Coleccion
              </Text>
            </View>
            {/* if there arent more boards besides See Later. */}
            <View style={styles.boardContainer}>
              <View style={styles.leftSide}>
                <View style={styles.miniPrev}></View>
                <Text style={styles.text}>Crear Colección</Text>
              </View>
              <View style={styles.rigthSide}>
                {!saved ? iconsCard.saved.filled : iconsArticle.plus}
              </View>
            </View>
            {/* if there are more boards.: FLATLIST */}
          </View>
        </View>
      </Modal>
      <CreateBoard
        showCreate={showCreate}
        setShowCreate={setShowCreate}
        data={data}
      />
    </>
  );
};

export default ModalSave;
