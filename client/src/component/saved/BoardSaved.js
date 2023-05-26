import { useState } from "react";
import { Text, View, TouchableOpacity, ImageBackground } from "react-native";
//obtener las imagenes de los dos últimos items

import { iconsCard } from "client/src/utils/iconOptions.js";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const BoardSaved = ({ item }) => {
  const navigation = useNavigation();

  const ids = item.posts.map((obj) => obj.postId);

  const cut = ids.length < 2 ? ids.slice(-1) : ids.slice(-2);
  const articles = useSelector((state) =>
    state.articles.filter((obj) => cut.includes(obj._id))
  );

  return (
    <View style={{}}>
      <View
        style={{
          height: 190,
          width: "100%",
          backgroundColor: "#ccc",
          marginBottom: 10,
          borderRadius: 10,
          padding: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("collection", item.posts)}
        >
          <Text style={{ fontWeight: "500", fontSize: 20 }}>{item.title}</Text>
          <Text> {item.posts.length} artículo(s)</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("article", articles[0]._id)}
          >
            <ImageBackground
              style={{ height: 80, width: 150 }}
              source={{
                uri: articles[0].images,
              }}
              imageStyle={{ borderRadius: 25 }}
            ></ImageBackground>
          </TouchableOpacity>

          {cut.length > 1 ? (
            <TouchableOpacity
              onPress={() => navigation.navigate("article", articles[1]._id)}
            >
              <ImageBackground
                style={{ height: 80, width: 150 }}
                source={{
                  uri: articles[1].images,
                }}
                imageStyle={{ borderRadius: 25 }}
              ></ImageBackground>
            </TouchableOpacity>
          ) : (
            <View style={{ height: 80, width: 150 }}>
              <Text>Agrega mas articulos a esta carpeta</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default BoardSaved;
