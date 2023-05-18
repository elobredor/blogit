import { useState } from "react";
import { Text, View, TouchableOpacity, ImageBackground, TouchableWithoutFeedback } from "react-native";
import { styles } from "./cardBlogStyles";
import { iconsCard } from "client/src/utils/iconOptions.js";
import { useNavigation } from "@react-navigation/native";

const CardArticle = ({ item }) => {
  const [isSaved, setIsSaved] = useState(item.saved);
  const [favorite, setFavorite] = useState(item.favorite);

  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('article', item)}>
      <View
        style={{
          marginBottom: 10,
          elevation: 10,
          marginHorizontal: 10,
          maxWidth: 350,
        }}
      >
        <ImageBackground
          source={{
            uri: item.image,
          }}
          imageStyle={{ borderRadius: 20 }}
        >
          <View style={styles.content}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 40,
              }}
            >
              <TouchableOpacity onPress={() => setFavorite(!favorite)}>
                {favorite ? iconsCard.heart.empty : iconsCard.heart.filled}
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setIsSaved(!isSaved)}>
                {isSaved ? iconsCard.saved.empty : iconsCard.saved.filled}
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>{item.title}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              {iconsCard.account.focused}
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                }}
              >
                {item.user}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardArticle;
