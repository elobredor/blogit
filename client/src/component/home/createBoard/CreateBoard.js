import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./createBoardStyles";
import { iconsArticle } from "../../../utils/iconOptions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logToDb } from "../../../redux/actions";
import { MY_IP } from "react-native-dotenv";

const CreateBoard = ({ showCreate, setShowCreate, data }) => {
  const dispacth = useDispatch();
  const [value, setValue] = useState();

  const handleChange = (text) => {
    setValue(text);
  };

  const handleSubmit = () => {
    if (value !== "") {
      const bodyBoard = {
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
            console.log(`la carpeta ${value} ha sido creada exitosamente`);
            dispacth(logToDb(data.userId));
            setShowCreate(false);
          } else {
            throw new Error("something went wrong");
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Olvidaste poner el nombre de la carpeta");
    }
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

            <Text
              onPress={handleSubmit}
              style={{ color: "#3B79BE", fontSize: 22 }}
            >
              Crear
            </Text>
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