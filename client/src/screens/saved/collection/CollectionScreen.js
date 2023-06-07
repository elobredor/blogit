import { Text, View, FlatList, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardArticle from "../../../component/home/cardArticle/CardArticle";
import { styles } from "./collectionStyles";
import { iconsCard } from "../../../utils/iconOptions";

const CollectionScreen = ({ route }) => {
  const data = route.params;
  const ids = data.posts.map((obj) => obj.postId);
  const [board, setBoard] = useState([]);
  const articles = useSelector((state) => state.articles);
  const savedArticles = articles.filter((obj) => ids.includes(obj._id));
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(data.title);
  useEffect(() => {
    setBoard(savedArticles);
  }, [articles]);

  const handleDots = () => {
    setVisible(!visible);
  };

  const editBoard = () => {
    // Btn submit
    setEdit(!edit);
    console.log("Has entrado en modo edicion");
  };

  const deleteBoard = () => {
    // fetch(`http://${MY_IP}:4000/api/users/delete-folder/${data._id}`, {
    //   method: "DELETE",
    //   headers: { "Content-Type": "application/json" },
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       dispatch(logToDb(userId));
    //       console.log("Folder has been deleted succesfully");
    //     } else throw new Error("No response from server");
    //   })
    //   .catch((err) => console.error(err));
    console.log("Has eliminado la carpeta: " + data.title);
  };

  const OptionsBoard = () => {
    return (
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Text onPress={editBoard} style={{ color: "white" }}>
          Edit
        </Text>
        <Text onPress={deleteBoard} style={{ color: "white" }}>
          Delete
        </Text>
      </View>
    );
  };

  const handleChange = (text) => {
    setTitle(text);
  };
  return (
    <View style={styles.colecctionContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          {edit ? (
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={handleChange}
              autoFocus
            />
          ) : (
            <Text style={styles.title}>{data.title}</Text>
          )}
          <Text style={styles.descri}>{data.description}</Text>
        </View>
        <Text onPress={handleDots}>
          {visible ? <OptionsBoard /> : iconsCard.account.dots}
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={board}
        renderItem={({ item }) => (
          <CardArticle
            item={item}
            toggleModal={() => console.log("Esta fn no es necesaria")}
          ></CardArticle>
        )}
      />
    </View>
  );
};

export default CollectionScreen;
