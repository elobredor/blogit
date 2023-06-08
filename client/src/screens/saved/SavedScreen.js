import { useState } from "react";
import {
  View,
  FlatList,
  Text,
  Button,
  TextInput,
  Keyboard,
} from "react-native";
import { styles } from "./savedScreen.styles";
import BoardSaved from "../../component/saved/BoardSaved.js";
import { MY_IP } from "react-native-dotenv";
import { useDispatch, useSelector } from "react-redux";
import { ModalLogin } from "../../component/shared/ModalLogin";
import { updateSaved } from "../../redux/actions";

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
  //Alerta: código de baja calidad
  const ContainerEdit = () => {
    const [title, setTitle] = useState(data.title);
    const handleChange = (text) => {
      setTitle(text);
    };

    const handleSubmit = () => {
      const bodyEdit = {
        title: title,
      };
      fetch(`http://${MY_IP}:4000/api/users/updateSaved/${data.folderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyEdit),
      })
        .then((res) => {
          if (res.ok) {
            dispatch(updateSaved(userId));
            console.log("Folder has been updated successfully");
          } else throw new Error("No response from server");
        })
        .catch((err) => console.log(err));
      setData(initialState);
    };

    if (data.title !== null) {
      return (
        <View style={styles.containerEdit}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>
              Renombrando carpeta:
            </Text>

            <Text
              onPress={() => {
                Keyboard.dismiss();
                setData(initialState);
              }}
              style={{ fontSize: 18, color: "#f5f5f5" }}
            >
              x
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <TextInput
              value={title}
              onChangeText={handleChange}
              style={styles.inputEdit}
              autoFocus
            />

            <Text
              style={{
                fontSize: 18,
                color: "#f5f5f5",
                backgroundColor: "#0ca",
              }}
              onPress={handleSubmit}
            >
              SUBMIT
            </Text>
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
