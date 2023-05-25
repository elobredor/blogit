import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { styles } from "./filtersHomeStyles";
import { MY_IP } from "react-native-dotenv";

// cada botón es igual a una peticion

//http://localhost:4000/api/blogs/category/No Code
//http://${MY_IP}:4000/api/blogs/category/No Code

const Filters = () => {
  const sendData = (text) => {
    fetch(`http://${MY_IP}:4000/api/blogs/category/${text}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error.message));
  };
  return (
    <View style={styles.containerFilter}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.btnFilter}>
          <Text style={styles.buttonText}>Filtros</Text>
        </View>
        <TouchableOpacity
          onPress={() => sendData("No Code")}
          style={styles.btnFilter}
        >
          <Text style={styles.buttonText}>UX/UI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFilter}>
          <Text style={styles.buttonText}>Back-end</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFilter}>
          <Text style={styles.buttonText}>Front-end</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFilter}>
          <Text style={styles.buttonText}>No Code</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Filters;
