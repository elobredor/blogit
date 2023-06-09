import { useState } from "react";
import {
  View,
  FlatList,
  Text,
  Button,
  TextInput,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./savedScreen.styles";
import BoardSaved from "../../component/saved/BoardSaved.js";
import { useDispatch, useSelector } from "react-redux";
import { ModalLogin } from "../../component/shared/ModalLogin";
import { updateSaved } from "../../redux/actions";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts, Arimo_400Regular, Arimo_700Bold } from '@expo-google-fonts/arimo';
import { Nunito_400Regular } from '@expo-google-fonts/nunito';

const SavedScreen = () => {
  const initialState = {
    title: null,
    folderId: null,
  };
  const [data, setData] = useState(initialState); // nombre del folder
  const userId = useSelector((state) => state.loggedUser.userId);
  const dispatch = useDispatch();
  const [modalVisibility, setModalVisibility] = useState(false);
  const hasLogged = useSelector((state) =>
    state.logged ? state.loggedUser : false
  );
  const token = useSelector(state => state.token);
  let [loadedFonts] = useFonts({
    Arimo_400Regular,
    Nunito_400Regular,
    Arimo_700Bold,
  });

  const ContainerEdit = () => {
    const [title, setTitle] = useState(data.title);
    const handleChange = (text) => {
      setTitle(text);
    };

    const handleSubmit = () => {
      const bodyEdit = {
        title: title,
      };
      fetch(`https://blogit.up.railway.app/api/users/updateSaved/${data.folderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bodyEdit),
      })
        .then((res) => {
          if (res.ok) {
            dispatch(updateSaved(userId));
            console.log("Folder has been updated successfully");
          } else throw new Error("No response from server");
        })
        .catch((err) => console.error(err));
      setData(initialState);
    };

    if(!loadedFonts) return null;
    if (data.title !== null) {
      return (
        <View style={styles.containerEdit}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "95%",
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontFamily: 'Arimo_400Regular' }}>
              Estás renombrando la carpeta:
            </Text>

            <Text
              onPress={() => {
                Keyboard.dismiss();
                setData(initialState);
              }}
              style={{ fontSize: 20, color: "#f5f5f5" }}
            >
              x
            </Text>
          </View>

          <View
            style={{ height: 1, width: "102%", backgroundColor: "#302962" }}
          ></View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "95%",
              marginVertical: 5,
            }}
          >
            <LinearGradient
              colors={["#34aba6", "#131af8", "#9344ca"]}
              start={[0, 0]}
              end={[1, 0]}
              locations={[0, 0.5, 1]}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                maxWidth: "80%",
              }}
            >
              <TextInput
                value={title}
                onChangeText={handleChange}
                style={styles.inputEdit}
                autoFocus
              />
            </LinearGradient>

            <TouchableOpacity onPress={handleSubmit}>
              <Image
                source={require("../../../assets/send-active.png")}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <View style={styles.savedContainer}>
      {hasLogged !== false ? (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id.toString()}
            data={hasLogged.saved}
            renderItem={({ item }) => (
              <BoardSaved item={item} setData={setData} />
            )}
          />

          <ContainerEdit />
        </>
      ) : (
        //NO LOGIN
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            gap: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 22, textAlign: "center" }}>
            Oops! para guardar artículos aquí primero debes loguearte
          </Text>
          <Button
            title="ingresar con Google"
            onPress={() => setModalVisibility(true)}
          />

          <ModalLogin
            modalVisibility={modalVisibility}
            setModalVisibility={setModalVisibility}
          />
        </View>
      )}
    </View>
  );
};

export default SavedScreen;
