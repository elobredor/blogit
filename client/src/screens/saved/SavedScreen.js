import { useState, useEffect } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { styles } from "./savedScreen.styles";
import { ModalLogin } from "../../component/shared/ModalLogin";
import BoardSaved from "../../component/saved/BoardSaved.js";
import { useSelector } from "react-redux";
const SavedScreen = () => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const hasLogged = useSelector((state) =>
    state.logged ? state.loggedUser : false
  );

  useEffect(() => {
    if (!hasLogged && !modalVisibility) setModalVisibility(true);
  }, [hasLogged, modalVisibility]);

  return (
    <View style={styles.savedContainer}>
      {hasLogged !== false ? (
        <FlatList
          keyExtractor={(item) => item._id.toString()}
          data={hasLogged.saved}
          renderItem={({ item }) => <BoardSaved item={item} />}
        />
      ) : (
        <View>
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
