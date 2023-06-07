import { useState, useEffect } from "react";
import { View, FlatList, Text, Button } from "react-native";
import { styles } from "./savedScreen.styles";
import BoardSaved from "../../component/saved/BoardSaved.js";
import { useSelector } from "react-redux";
import { ModalLogin } from "../../component/shared/ModalLogin";
const SavedScreen = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const hasLogged = useSelector((state) =>
    state.logged ? state.loggedUser : false
  );

  useEffect(() => {}, [hasLogged]);
  return (
    <View style={styles.savedContainer}>
      {hasLogged !== false ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id.toString()}
          data={hasLogged.saved}
          renderItem={({ item }) => <BoardSaved item={item} />}
        />
      ) : (
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
