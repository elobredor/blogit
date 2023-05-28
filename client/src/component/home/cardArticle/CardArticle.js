import { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { styles } from "./cardArticleStyles";
import { iconsCard } from "client/src/utils/iconOptions.js";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { logToDb, setArticleLike2 } from "../../../redux/actions";
import { MY_IP } from "react-native-dotenv";
import ModalSave from "../ModalSave/ModalSave";

const CardArticle = ({ item, setModalVisibility }) => {
  const [favorite, setFavorite] = useState();
  const [saved, setSaved] = useState(false);
  const [alert, setAlert] = useState(false);
  const hasLogged = useSelector((state) =>
    state.logged ? state.loggedUser : false
  );
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    if (item.postLikes.includes(hasLogged._id)) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }, [hasLogged, item.postLikes]);

  //agregarLike
  const favoriteArticle = () => {
    const favoriteBody = {
      userId: hasLogged._id,
    };

    fetch(`http://${MY_IP}:4000/api/posts/like/${item._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoriteBody),
    })
      .then((res) => {
        if (res.ok) {
          console.log(
            "te gustó esa mondá, para ser especifico el artículo con id: " +
              item._id
          );
          // necesito mandar el id del articulo que fue cambiado
          dispatch(setArticleLike2(hasLogged._id, item._id));
        } else {
          throw new Error("ha habido un error");
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (hasLogged) {
      const answer = hasLogged.saved.some((folder) =>
        folder.posts.some((post) => post.postId === item._id)
      );
      setSaved(answer);
    }
  }, [hasLogged]);
  //agregar guardados
  const savedArticle = () => {
    const savedBody = {
      postId: item._id,
      title: "Leer más tarde",
      images: item.images,
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

    if (saved === false) {
      setAlert(true);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("article", item._id)}
      >
        <View style={styles.card}>
          <ImageBackground
            source={{ uri: item.images }}
            imageStyle={{ borderRadius: 25 }}
          >
            <View style={styles.content}>
              <View style={{ justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
                  <Text style={styles.btnFilter}>{item.category}</Text>
                </View>

                <View>
                  <Text style={styles.title}>{item.title}</Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={{ uri: item.profileImage }}
                      style={styles.profileImg}
                    />
                    <Text style={{ color: "white", fontSize: 16 }}>
                      {item.userName}
                    </Text>
                  </View>
                </View>
              </View>

              <View style={styles.reactiveItems}>
                <TouchableOpacity
                  onPress={() =>
                    hasLogged ? favoriteArticle() : setModalVisibility(true)
                  }
                  style={styles.favorite}
                >
                  {favorite ? iconsCard.heart.empty : iconsCard.heart.filled}
                  <Text style={{ color: "white", fontSize: 18 }}>
                    {item.postLikes.length}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    hasLogged ? savedArticle() : setModalVisibility(true)
                  }
                >
                  {saved ? iconsCard.saved.filled : iconsCard.saved.empty}
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
      <ModalSave alert={alert} setAlert={setAlert} />
    </>
  );
};

export default CardArticle;
