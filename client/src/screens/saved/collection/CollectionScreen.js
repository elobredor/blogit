import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList,
} from "react-native";
import { iconsCard } from "../../../utils/iconOptions";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import CardArticle from "../../../component/home/cardArticle/CardArticle";
import { getArticles } from "../../../redux/actions";
//obtener los id de los artículos guardados en default
//pedir el artículo en get all page

const CollectionScreen = ({ route }) => {
  const ids = route.params;
  console.log(ids);

  const [board, setBoard] = useState([]);

  const articles = useSelector((state) =>
    state.articles.filter((art) => ids.includes(art._id))
  );

  useEffect(() => {
    setBoard(articles);
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 24 }}>Leer más tarde</Text>
      <Text>Añade una descripción</Text>

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

export const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginBottom: 10,
    elevation: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 170,
    padding: 15,
  },

  title: {
    fontSize: 20,
    marginBottom: 6,
    color: "white",
    fontWeight: "bold",
    maxWidth: "90%",
  },
  btnFilter: {
    borderRadius: 8,
    backgroundColor: "white",
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 10,
    paddingVertical: 2,
    textAlign: "center",
    marginBottom: "15%",
  },
});

export default CollectionScreen;
