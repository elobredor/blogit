
import { View, Text, FlatList, TouchableOpacity, Image, Button } from "react-native";
import Filters from "../../component/home/filtersHome/FiltersHome";
import CardArticle from "../../component/home/cardArticle/CardArticle";
import { ModalLogin } from "../../component/shared/ModalLogin";
import React, { useEffect, useState } from "react";
import { styles } from "./homeScreen.styles";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../redux/actions";
import { iconOptions } from "../../utils/iconOptions";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Arimo_700Bold } from '@expo-google-fonts/arimo';
import MyAuthProvider from "../../component/auth/MyAuthProvider";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const filtered = useSelector((state) => state.filtered);
  const isLogged = useSelector((state) => state.logged);
  const fetchStatus = useSelector((state) => state.articles_fetch);
  const img = useSelector((state) => state.loggedUser.profileImage);
  const [modalVisibility, setModalVisibility] = useState(false);
  const { navigate } = useNavigation();
  let [fontsLoaded] = useFonts({
    Arimo_700Bold,
  });

  useEffect(() => {
    console.log(fetchStatus);
  }, [fetchStatus])

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  if(fetchStatus.status === 'loading' || !fontsLoaded) return <View style={{flex: 1, backgroundColor: '#020123'}}></View>
  return (
    <MyAuthProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          {img === undefined ? (
            <TouchableOpacity
              onPress={() => !isLogged && setModalVisibility(true)}
            >
              {iconOptions.account.focused}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => navigate("account")}>
              <Image source={{ uri: img }} style={styles.profilePh} />
            </TouchableOpacity>
          )}

          <Text style={styles.logo}>BlogIT</Text>
        </View>
        <Filters />
        <FlatList
          data={filtered.length ? filtered : articles}
          renderItem={({ item }) => (
            <CardArticle setModalVisibility={setModalVisibility} item={item} />
          )}
          keyExtractor={(item) => item._id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <ModalLogin
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />
    </MyAuthProvider>
  );
};

export default HomeScreen;
