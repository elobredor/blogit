import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RenderPrevArticle } from "./prevArticles";
import styles from "./boardStyles";
import { useFonts, Arimo_400Regular } from '@expo-google-fonts/arimo';
import { Nunito_400Regular } from '@expo-google-fonts/nunito';


const BoardSaved = ({ item }) => {
  const navigation = useNavigation();
  let [loadedFonts] = useFonts({
    Arimo_400Regular,
    Nunito_400Regular,
  });

  const ids = item.posts.map((obj) => obj.postId);

  const lastArticles = ids.length < 2 ? ids.slice(-1) : ids.slice(-2);
  const articles = useSelector((state) =>
    state.articles.filter((obj) => lastArticles.includes(obj._id))
  );
  //Boton eliminar y editar
  //Boton eliminar, modal de confirmacion, onPress ()=> deleteBoard sobre el yes.
  //Crear funcion deleteBoard
  //Boton editar, edita enseguida.

  if (!loadedFonts) return <View style={styles.containerBoard}></View>
  return (
    <>
      <View style={styles.containerBoard}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Collection", item)}
        >
          <Text style={styles.boardTitle}>{item.title}</Text>
          <Text style={{ color: "#a7a7a7", marginLeft: 16, fontFamily: 'Nunito_400Regular' }}>
            {item.posts.length} artículo(s)
          </Text>
        </TouchableOpacity>
        <RenderPrevArticle articles={articles} />
      </View>
    </>
  );
};

export default BoardSaved;
