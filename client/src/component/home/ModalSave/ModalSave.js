import { Modal, View, Text } from "react-native";
import { styles } from "./ModalSaveStyles";
import { useState, useEffect } from "react";
import SelectBoard from "../selectBoard/SelectBoard.js";
import { logToDb } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import { MY_IP } from "react-native-dotenv";

const ModalSave = ({ alert, setAlert, data, savedFn }) => {
  const [visible, setVisible] = useState(false); // estado de SelectModal// Elegir tablero

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 3800);
  }, [alert]);

  const dispacth = useDispatch();

  //Eliminar de guardado

  // const savedFn = () => {
  //   const bodyBoard = {
  //     postId: data.postId,
  //     title: "Leer más tarde",
  //     images: data.images,
  //   };
  //   fetch(`http://${MY_IP}:4000/api/users/saved/${data.userId}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(bodyBoard),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         console.log(`ELIMINADO DE leer mas tarde`);
  //         dispacth(logToDb(data.userId));
  //       } else {
  //         throw new Error("something went wrong");
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleLink = () => {
    savedFn();
    setVisible(true);
  };

  return (
    <View>
      <Modal visible={alert} transparent animationType="fade">
        <View style={styles.modalBg}>
          <View style={styles.modalContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.info}>Guardado en </Text>
              <Text style={styles.boardName}>Leer más tarde</Text>
            </View>
            <Text style={styles.link} onPress={handleLink}>
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
