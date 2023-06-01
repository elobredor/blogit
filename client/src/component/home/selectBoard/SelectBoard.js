import { Modal, View, Text, FlatList, ImageBackground } from "react-native";
import { styles } from "./selectBoardStyles";
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
        (obj) => obj.title !== "Leer más tarde"
      );
      setBoards(filteredBoards);
    }
  }, [savedB]);

  const renderBoards = (boards) => {
    return boards.length > 0 ? (
      <FlatList
        data={boards}
        renderItem={({ item }) => (
          <BoardE item={item} savedFn={savedFn} data={data} />
        )}
      />
    ) : (
      <CreateItem setShowCreate={setShowCreate} />
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
                <View style={styles.miniPrev}>
                  <ImageBackground
                    source={{ uri: data.images }}
                    imageStyle={{ width: 80, height: 80 }}
                  >
                    <Text>.</Text>
                  </ImageBackground>
                </View>
                <Text style={styles.text}>Leer más tarde</Text>
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

const CreateItem = ({ setShowCreate }) => {
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
          <View style={styles.miniPrev}>
            <ImageBackground
              source={{ uri: item.posts[0].images }}
              imageStyle={{ width: 80, height: 80 }}
            >
              <Text>.</Text>
            </ImageBackground>
          </View>
          <Text onPress={() => savedFn(item.title)} style={styles.text}>
            {item.title}
          </Text>
        </View>
        <View onPress={() => savedFn(item.title)} style={styles.rigthSide}>
          {iconsArticle.plus}
        </View>
      </View>
    </>
  );
};

export default ModalSave;
