import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RenderPrevArticle } from "./prevArticles";
import styles from "./boardStyles";

const BoardSaved = ({ item }) => {
  const navigation = useNavigation();

  const ids = item.posts.map((obj) => obj.postId);

  const lastArticles = ids.length < 2 ? ids.slice(-1) : ids.slice(-2);
  const articles = useSelector((state) =>
    state.articles.filter((obj) => lastArticles.includes(obj._id))
  );

  return (
    <>
      <View style={styles.containerBoard}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Collection", item)}
        >
          <Text style={styles.boardTitle}>{item.title}</Text>
          <Text> {item.posts.length} artículo(s)</Text>
        </TouchableOpacity>
        <RenderPrevArticle articles={articles} />
      </View>
    </>
  );
};

export default BoardSaved;
