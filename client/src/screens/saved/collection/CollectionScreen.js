import { Text, View, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardArticle from "../../../component/home/cardArticle/CardArticle";
import { styles } from "./collectionStyles";
import { iconsCard } from "../../../utils/iconOptions";
import { logToDb } from "../../../redux/actions";

const CollectionScreen = ({ route }) => {
  const data = route.params;
  const ids = data.posts.map((obj) => obj.postId);
  const [board, setBoard] = useState([]);
  const articles = useSelector((state) => state.articles);
  const savedArticles = articles.filter((obj) => ids.includes(obj._id));
  const userId = useSelector((state) => state.hasLogged._id);
  const dispatch = useDispatch();

  useEffect(() => {
    setBoard(savedArticles);
  }, [articles]);
  // Función editar
  // Función eliminar
  // const deleteBoard = () => {
  //   fetch(`http://${MY_IP}:4000/api/users/delete-folder/${data._id}`, {
  //     method: "DELETE",
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((res) => {
  //       if (res.ok) dispatch(logToDb(userId));
  //       else throw new Error("No response from server");
  //     })
  //     .catch((err) => console.error(err));
  // };

  return (
    <View style={styles.colecctionContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.descri}>{data.description}</Text>
        </View>
        <Text style={styles.dots}>{iconsCard.account.dots}</Text>
        {/* Esto me muestra los botones de edit and delete  */}
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
