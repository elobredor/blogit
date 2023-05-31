import { Modal, View, Text, Image, FlatList } from "react-native";
import { styles } from "./selectBoardStyles";
import { useNavigation } from "@react-navigation/native";
import { iconsCard, iconsArticle } from "../../../utils/iconOptions";
import { useState, useEffect } from "react";
import CreateBoard from "../createBoard/CreateBoard";
import { useDispatch, useSelector } from "react-redux";
import { MY_IP } from "react-native-dotenv";
import { logToDb } from "../../../redux/actions";

const ModalSave = ({ visible, setVisible, data }) => {
  const [showCreate, setShowCreate] = useState(false); // Estado de CreateBoard
  const [saved, setSaved] = useState(true);
  const [boards, setBoards] = useState([]);
  const navigation = useNavigation();
  const boardName = "Todos los artículos";
  const savedB = useSelector((state) => state.loggedUser.saved);
  const dispacth = useDispatch();

  //funcion guardado
  const savedFn = (title) => {
    const bodyBoard = {
      postId: data.postId,
      title: title,
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
          console.log(`se ha guardado exitosament en ${title}`);
          dispacth(logToDb(data.userId));
          setVisible(false);
        } else {
          throw new Error("something went wrong");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (savedB && savedB.length > 0) {
      const filteredBoards = savedB.filter(
        (obj) => obj.title !== "Todos los artículos"
      );
      setBoards(filteredBoards);
    }
  }, [savedB]);

  const renderBoards = (boards) => {
    return boards.length > 0 ? (
      <FlatList
        data={boards.reverse()}
        renderItem={({ item }) => <BoardE item={item} savedFn={savedFn} />}
      />
    ) : (
      <CreateItem />
    );
  };

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
                  setVisible(false);
                }}
                style={{ color: "#3B79BE" }}
              >
                Nueva Coleccion
              </Text>
            </View>

            {renderBoards(boards)}
          </View>
        </View>
      </Modal>
      <CreateBoard
        showCreate={showCreate}
        setShowCreate={setShowCreate}
        data={data}
        setVisible={setVisible}
      />
    </>
  );
};

const CreateItem = () => {
  return (
    <View style={styles.boardContainer}>
      <View style={styles.leftSide}>
        <View style={styles.miniPrev}></View>
        <Text
          onPress={() => {
            setShowCreate(true);
          }}
          style={styles.text}
        >
          Crear Colección
        </Text>
      </View>
      <View
        onPress={() => {
          setShowCreate(true);
        }}
        style={styles.rigthSide}
      >
        {iconsArticle.plus}
      </View>
    </View>
  );
};

const BoardE = ({ item, savedFn }) => {
  return (
    <>
      <View style={styles.boardContainer}>
        <View style={styles.leftSide}>
          <View style={styles.miniPrev}>{/*Image del item actual*/}</View>
          <Text onPress={() => savedFn(item.title)} style={styles.text}>
            {item.title} {/* obtener el nombre del tablero */}
          </Text>
        </View>
        <View
          onPress={() => console.log("se ha guardado en " + item.title)}
          style={styles.rigthSide}
        >
          {iconsArticle.plus}
        </View>
      </View>
    </>
  );
};

export default ModalSave;
