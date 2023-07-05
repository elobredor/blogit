import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "./createBoardStyles";
import { iconsArticle } from "../../../utils/iconOptions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSaved } from "../../../redux/actions";
import { MY_IP } from "react-native-dotenv";
import { useFonts, Arimo_400Regular, Arimo_500Medium } from '@expo-google-fonts/arimo';
import { Nunito_400Regular } from '@expo-google-fonts/nunito';


const CreateBoard = ({ showCreate, setShowCreate, data, setVisible }) => {
  const token = useSelector(state => state.token);
  let [fontsLoaded] = useFonts({
    Arimo_400Regular,
    Nunito_400Regular,
    Arimo_500Medium
  });

  const dispacth = useDispatch();
  const [title, setTitle] = useState("");
  const [descri, setDescri] = useState("");

  const handleChangeTitle = (text) => {
    setTitle(text);
  };

  const handleChangeDecri = (text) => {
    setDescri(text);
  };
  const handleSubmit = () => {
    if (title !== "") {
      if (descri.length > 50 || title.length > 30) {
        // modal de aviso o texto debajo del respectivo input
      } else {
        const bodyBoard = {
          postId: data.postId,
          title: title,
          images: data.images,
          description: descri
            ? descri
            : "Aquí puedes añadir una breve descripción",
        };
        fetch(`https://blogit.up.railway.app/api/users/saved/${data.userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(bodyBoard),
        })
          .then((res) => {
            if (res.ok) {
              console.log(`la carpeta ${title} ha sido creada exitosamente`);
              dispacth(updateSaved(data.userId));
              setVisible(false);
              setShowCreate(false);
            } else {
              throw new Error("something went wrong");
            }
          })
          .catch((err) => console.error(err));
      }
    } else {
      console.log("Olvidaste poner el nombre de la carpeta");
    }
  };

  if (!fontsLoaded) return null;
  return (
    <Modal visible={showCreate} transparent animationType="slide">
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
              style={{ color: "#37B4A1", fontSize: 20, marginRight: 10, fontFamily: 'Arimo_500Medium' }}
            >
              Crear
            </Text>
          </View>

          <TextInput
            autoFocus
            style={title.length < 30 ? styles.input : styles.inputError}
            placeholder="Nombre de la coleccion"
            placeholderTextColor="white"
            onChangeText={handleChangeTitle}
          />
          <TextInput
            style={descri.length < 50 ? styles.input : styles.inputError}
            placeholder="Descripción (opcional)"
            placeholderTextColor="white"
            onChangeText={handleChangeDecri}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CreateBoard;
