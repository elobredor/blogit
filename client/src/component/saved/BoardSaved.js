import { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
//obtener las imagenes de los dos últimos items

import { iconsCard } from "client/src/utils/iconOptions.js";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const BoardSaved = ({ item }) => {
  const navigation = useNavigation();

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
          <Text>{item.posts.length} artículos</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
          // onPress={() => navigation.navigate("article", item)}
          >
            <ImageBackground
              style={{ height: 80, width: 150 }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8h9-EZ75LP0QeVAsJNKsMR-SwbwxGWaaDrQ&usqp=CAU\""
              }}
              imageStyle={{ borderRadius: 25 }}
            ></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
          // onPress={() => navigation.navigate("article", item)}
          >
            <ImageBackground
              style={{ height: 80, width: 150 }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgc6IlfnFM8ej_1nIaE74EKWI4XroYt1tbzWfP3uwEmLJlsb_i7XXW8-kYnGrNE4I9o4&usqp=CAU"
              }}
              imageStyle={{ borderRadius: 25 }}
            ></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BoardSaved;
