import { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./cardArticleStyles";
import { iconsCard } from "client/src/utils/iconOptions.js";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { logToDb } from "../../../redux/actions";
import { MY_IP } from "react-native-dotenv";

const CardArticle = ({ item, setModalVisibility }) => {
  const [favorite, setFavorite] = useState();
  const [saved, setSaved] = useState(false)
  const hasLogged = useSelector((state) =>
    state.logged ? state.loggedUser : false
  );
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    if (hasLogged !== false) {
      let answer = false;
      [...hasLogged.saved].forEach(folder => {
        if (folder.posts.includes(item._id)) {
          answer = true
        }
      });
      setSaved(answer);
    }
  }, [hasLogged])

  //agregar guardados
  const savedArticle = (id) => {
    const savedBody = {
      postId: id,
      title: "Leer más tarde",
    };

    fetch(`http://${MY_IP}:4000/api/users/saved/${hasLogged.userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(savedBody),
    })
      .then((res) => {
        if (res.ok) {
          dispatch(logToDb(hasLogged.userId));
        } else {
          throw new Error("ha habido un error");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("article", item._id)}
    >
      <View style={styles.card}>
        <ImageBackground
          source={{
            uri: item.images,
          }}
          imageStyle={{ borderRadius: 25 }}
        >
          <View style={styles.content}>
            <View style={{ justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
                <Text style={styles.btnFilter}>{item.category}</Text>
              </View>

              <View>
                <Text style={styles.title}>{item.title}</Text>

                <Text
                  style={{
                    color: "white",
                    fontSize: 16,
                  }}
                >
                  {iconsCard.account.focused}

                  {item.userName}
                </Text>
              </View>
            </View>

            <View
              style={{
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  hasLogged ? setFavorite(!favorite) : setModalVisibility(true)
                }
                style={{
                  flexDirection: "row",
                  gap: 5,
                }}
              >
                {favorite ? iconsCard.heart.empty : iconsCard.heart.filled}
                <Text style={{ color: "white", fontSize: 15, marginBottom: 4 }}>
                  16
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  hasLogged ? savedArticle(item._id) : setModalVisibility(true)
                }
              >
                {saved ? iconsCard.saved.filled : iconsCard.saved.empty}
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardArticle;
