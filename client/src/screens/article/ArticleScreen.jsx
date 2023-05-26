import { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  Image
} from "react-native";
import { MY_IP } from "react-native-dotenv";
import { ModalLogin } from "../../component/shared/ModalLogin.jsx";
import { iconsArticle } from "client/src/utils/iconOptions.js";
import { styles } from "./ArticleScreen.styles";
import { useNavigation } from "@react-navigation/native";
import RenderHtml from "react-native-render-html";
import { formatDate, setReadingTime } from "../../utils/formatData";
import { useSelector, useDispatch } from "react-redux";
import { getDetails, setArticleLike } from "../../redux/actions";

export default function ArticleScreen({ route }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [favorite, setFavorite] = useState(false);
  const [saved, setSaved] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);
  const article = useSelector((state) => state.details);
  const fetchStatus = useSelector((state) => state.details_fetch);
  const loggedUser = useSelector((state) => {
    return state.logged ? state.loggedUser : null;
  });

  useEffect(() => {
    dispatch(getDetails(route.params));
  }, []);

  const handleNavigateToComments = () => {
    if (!loggedUser) {
      setModalVisibility(true);
    } else {
      navigation.navigate("comments");
    }
  };

  useEffect(() => {
    if (fetchStatus.status === "success" && loggedUser) {
      if (article.postLikes.includes(loggedUser._id)) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    }
  }, [loggedUser, article]);

  const handleFavorite = () => {
    if (!loggedUser) {
      setModalVisibility(true);
    } else {
      const body = { userId: loggedUser._id };
      fetch(`http://${MY_IP}:4000/api/posts/like/${article._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then((res) => {
        if (res.ok) dispatch(setArticleLike(loggedUser._id));
      });
    }
  };

  if (fetchStatus.status === "loading")
    return (
      <View
        style={{
          paddingTop: 150,
          backgroundColor: "#eee",
          alignItems: "center",
          flex: 1,
        }}
      ></View>
    );
  if (fetchStatus.status === "rejected")
    return (
      <View
        style={{
          backgroundColor: "#eee",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Error:</Text>
        <Text style={{ fontSize: 30 }}>{fetchStatus.error}</Text>
      </View>
    );
  if (fetchStatus.status === "success")
    return (
      <>
        <View style={styles.headerView}>
          <View style={styles.authorView}>
            <Image source={{ uri: article.profileImage }} style={styles.authorImage}/>
            <View>
              <Text style={styles.authorName}>{article.userName}</Text>
              <Text style={styles.timeDate}>
                {formatDate(article.createdAt)}
              </Text>
              <Text style={styles.timeDate}>
                {setReadingTime(article.content)}
              </Text>
            </View>
          </View>
          <View style={styles.icons}>
            <View style={{ flexDirection: "row", gap: 2 }}>
              <TouchableWithoutFeedback onPress={handleNavigateToComments}>
                {iconsArticle.comment}
              </TouchableWithoutFeedback>
              <Text>{article.comments.length}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableWithoutFeedback onPress={handleFavorite}>
                {!favorite
                  ? iconsArticle.heart.empty
                  : iconsArticle.heart.filled}
              </TouchableWithoutFeedback>
              <Text>{article.postLikes.length}</Text>
            </View>
            <TouchableWithoutFeedback onPress={() => setSaved(!saved)}>
              {saved ? iconsArticle.saved.focused : iconsArticle.saved.default}
            </TouchableWithoutFeedback>
          </View>
        </View>
        <ScrollView style={styles.container}>
          <View style={styles.imageView}>
            <ImageBackground
              source={{ uri: article.images }}
              imageStyle={{ borderRadius: 10, height: 180 }}
            ></ImageBackground>
          </View>
          <RenderHtml
            contentWidth={Dimensions.get("window").width}
            source={{ html: article.content }}
          />
        </ScrollView>
        <ModalLogin modalVisibility={modalVisibility} setModalVisibility={setModalVisibility} />
      </>
    );
}
