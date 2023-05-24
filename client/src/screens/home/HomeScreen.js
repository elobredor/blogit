import {
  View,
  Text,
  SafeAreaView,
  Modal,
  Button,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../redux/actions";
import { useNavigation } from "@react-navigation/native";
import Filters from "../../component/home/filtersHome/FiltersHome";
import SearchBar from "../../component/home/searchBar/SearchBar";
import { styles } from "./homeScreen.styles";
import CardArticle from "../../component/home/cardArticle/CardArticle";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const goToHome = () => {
    setVisible(!visible)
    navigation.navigate("account")
  };

  return (
    <SafeAreaView>
      <Modal visible={visible} animationType="slide" transparent>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <View
            style={{
              padding: 20,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              backgroundColor: '#eee',
              gap: 10,
              elevation: 5
            }}
          >
            <Text style={{ fontSize: 25 }}>Tienes que loguearte primero</Text>
            <Button title="Cerrar" onPress={() => setVisible(!visible)} />
            <Button
              title="log in"
              onPress={goToHome}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.container}>
        <SearchBar />
        <Filters />

        <View>
          <FlatList
            data={articles}
            renderItem={({ item }) => (
              <CardArticle toggleModal={toggleModal} item={item} />
            )}
            keyExtractor={(item) => item._id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
