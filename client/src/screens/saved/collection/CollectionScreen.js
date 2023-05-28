import { Text, View, FlatList } from "react-native";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardArticle from "../../../component/home/cardArticle/CardArticle";
import { styles } from "./collectionStyles";

const CollectionScreen = ({ route }) => {
  const data = route.params;

  const ids = data.map((obj) => obj.postId);

  const [board, setBoard] = useState([]);

  const articles = useSelector((state) =>
    state.articles.filter((art) => ids.includes(art._id))
  );

  useEffect(() => {
    setBoard(articles);
  }, []);

  return (
    <View style={styles.colecctionContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Leer más tarde</Text>
        <Text styles={styles.descri}>
          Artículos pendientes para revisar más tarde.
        </Text>
      </View>

      <FlatList
        data={board}
        renderItem={({ item }) => (
          <CardArticle
            item={item}
            toggleModal={() => console.log("hola")}
          ></CardArticle>
        )}
      ></FlatList>
    </View>
  );
};

export default CollectionScreen;
