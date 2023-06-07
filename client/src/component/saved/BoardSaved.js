import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RenderPrevArticle } from "./prevArticles";
import { iconsCard } from "../../utils/iconOptions";
import styles from "./boardStyles";
import { MY_IP } from "react-native-dotenv";
import { useEffect, useState } from "react";

const BoardSaved = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const userId = useSelector((state) => state.loggedUser._id);
  const ids = item.posts.map((obj) => obj.postId);
  const lastArticles = ids.length < 2 ? ids.slice(-1) : ids.slice(-2);
  const articles = useSelector((state) =>
    state.articles.filter((obj) => lastArticles.includes(obj._id))
  );
  const [visible, setVisible] = useState(false); //Edit and delete options visibility
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(item.title);

  const handleDots = () => {
    console.log("Ahora puedes editar o eliminar ");
    setVisible(!visible);
  };
  const deleteBoard = () => {
    // fetch(`http://${MY_IP}:4000/api/users/delete-folder/${item._id}`, {
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
    console.log("Has eliminado la carpeta: " + item.title);
  };

  const editBoard = () => {
    // Btn submit
    setEdit(!edit);
    console.log("Has entrado en modo edicion");
  };

  // const submEdit = (title, desc) => {
  //   const bodyEdit = {
  //     title: title ? title : item.title,
  //     description: desc ? desc : item.description,
  //   };
  //   fetch(`http://${MY_IP}:4000/api/users/updateSaved/${item._id}`, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(bodyEdit),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         dispatch(logToDb(userId));
  //         console.log("Folder has been updated succesfully");
  //       } else throw new Error("no response from server");
  //     })
  //     .catch((err) => console.log(err));
  // };

  //Crear un overInput

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
    <>
      <View style={styles.containerBoard}>
        <View style={styles.containerHeader}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Collection", item)}
          >
            {edit ? (
              <TextInput
                style={styles.input}
                value={title}
                onChangeText={handleChange}
                autoFocus
              />
            ) : (
              <Text style={styles.boardTitle}>{item.title}</Text>
            )}
            <Text style={{ color: "#f5f5f5" }}>
              {item.posts.length} artículo(s)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDots} style={styles.dots}>
            {visible ? <OptionsBoard /> : iconsCard.account.dots}
          </TouchableOpacity>
        </View>
        <RenderPrevArticle articles={articles} />
      </View>
    </>
  );
};

export default BoardSaved;
