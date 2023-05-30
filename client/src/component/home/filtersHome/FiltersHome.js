import React, { useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity, Text, Button } from "react-native";
import { styles } from "./filtersHomeStyles";
import { getCategory } from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Filters = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  const [currentCategory, setCurrentCategory] = useState("all");
  const sendData = (text) => {
    if (text === currentCategory) {
      setCurrentCategory("all");
    } else {
      setCurrentCategory(text);
    }
  };

  useEffect(() => {
    dispatch(getCategory(currentCategory));
  }, [articles]);

  useEffect(() => {
    dispatch(getCategory(currentCategory));
    console.log(currentCategory);
  }, [currentCategory]);
  return (
    <View style={styles.containerFilter}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => sendData("Back-end")}
          style={
            currentCategory == "Back-end"
              ? styles.btnFilterFocus
              : styles.btnFilter
          }
        >
          <Text style={styles.buttonText}>UX/IU</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => sendData("Fron-end")}
          style={
            currentCategory == "Fron-end"
              ? styles.btnFilterFocus
              : styles.btnFilter
          }
        >
          <Text style={styles.buttonText}>Front-end</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => sendData("Back-end")}
          style={
            currentCategory == "Back-end"
              ? styles.btnFilterFocus
              : styles.btnFilter
          }
        >
          <Text style={styles.buttonText}>Back-end</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => sendData("No code")}
          style={
            currentCategory == "No code"
              ? styles.btnFilterFocus
              : styles.btnFilter
          }
        >
          <Text style={styles.buttonText}>No code</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Filters;
