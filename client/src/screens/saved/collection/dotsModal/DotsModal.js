import { Modal, View, Text } from "react-native";
import { styles } from "./dotsModalStyles";

const DotsModal = ({ visible, setVisible }) => {
  return (
    <View>
      <Modal visible={visible} transparent animationType="fade">
        <View style={styles.modalBg}>
          <View style={styles.modalContainer}>
            <View style={{}}>
              <Text style={styles.info}>Editar </Text>
              <Text style={styles.boardName}>Eliminar</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DotsModal;
