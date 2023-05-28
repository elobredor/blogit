import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import Filters from "../../component/home/filtersHome/FiltersHome";
import CardArticle from "../../component/home/cardArticle/CardArticle";
import SearchBar from "../../component/home/searchBar/SearchBar";
import { ModalLogin } from "../../component/shared/ModalLogin";
import React, { useEffect, useState } from "react";
import { styles } from "./homeScreen.styles";
import { useDispatch, useSelector } from "react-redux";
import { getArticles, logToDb } from "../../redux/actions";
import { iconOptions } from "../../utils/iconOptions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const isLogged = useSelector((state) => {
    state.logged;
  });
  const img = useSelector((state) => state.loggedUser.profileImage);

  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          {img === undefined ? (
            <TouchableOpacity
              onPress={() => !isLogged && setModalVisibility(true)}
            >
              {iconOptions.account.focused}
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Image source={{ uri: img }} style={styles.profilePh} />
            </TouchableOpacity>
          )}

          <Text style={styles.logo}>BlogIT</Text>
        </View>
        <SearchBar />
        <Filters />
        <FlatList
          data={/* sortArticles.length ? sortArticle :*/ articles}
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
    </>
  );
};

export default HomeScreen;
