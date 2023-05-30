import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./boardStyles";

export const RenderPrevArticle = ({ num, articles }) => {
  if (num === 1) {
    return (
      <View style={styles.prevContainer}>
        <PrevArticle articles={articles} />
        <Text>Previzualiza otro articulo </Text>
      </View>
    );
  } else if (num >= 2) {
    return (
      <View style={styles.prevContainer}>
        <PrevArticle articles={articles} />
        <PrevArticle articles={articles} n={1} />
      </View>
    );
  } else if (num === 0) {
    return <Text style={styles.textEmpty}>Esta carpeta está vacía</Text>;
  }
};

export const PrevArticle = ({ n = 0, articles }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("article", articles[n]._id)}
    >
      <ImageBackground
        style={styles.prevArticle}
        source={{ uri: articles[n].images }}
        imageStyle={{ borderRadius: 14 }}
      ></ImageBackground>
    </TouchableOpacity>
  );
};
