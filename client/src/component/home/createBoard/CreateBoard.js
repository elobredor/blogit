import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./createBoardStyles";
import { iconsCard, iconsArticle } from "../../../utils/iconOptions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logToDb } from "../../../redux/actions";

const CreateBoard = ({ showCreate, setShowCreate, data }) => {
  const dispacth = useDispatch();
  const [value, setValue] = useState();
  const handleChange = (text) => {
    setValue(text);
    //validar que text no sea ""
  };

  const handleSubmit = () => {
    const bodyBoard = {
      userId: data.userId,
      postId: data.postId,
      title: value,
      images: data.images,
    };
    fetch(`http://${MY_IP}:4000/api/users/saved/${data.userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyBoard),
    })
      .then((res) => {
        if (res.ok) {
          dispacth(logToDb(data.userId));
          console.log(`la carpeta ${value} ha sido creada exitosamente`);
        } else {
          throw new Error("something went wrong");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Modal visible={showCreate} transparent animationType="fade">
      <View style={styles.modalBg}>
        <View style={styles.modalContainer}>
          {/* See Later Board */}
          <View style={styles.infoContainer}>
            <View style={styles.leftSide}>
              <TouchableOpacity onPress={() => setShowCreate(false)}>
                {iconsArticle.cross}
              </TouchableOpacity>
              <Text style={styles.text}>Nueva Colección</Text>
            </View>

            <Text style={{ color: "#3B79BE", fontSize: 22 }}>Crear</Text>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Nombre de la coleccion"
            placeholderTextColor="white"
            onChangeText={handleChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Descripción (opcional)"
            placeholderTextColor="white"
          />
        </View>
      </View>
    </Modal>
  );
};

export default CreateBoard;
