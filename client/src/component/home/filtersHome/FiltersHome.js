import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { styles } from "./filtersHomeStyles";

const Filters = () => {
  return (
    <View style={styles.containerFilter}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.btnFilter}>
          <Text style={styles.buttonText}>Filtros</Text>
        </View>
        <TouchableOpacity style={styles.btnFilter}>
          <Text style={styles.buttonText}>UX/UI</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFilter}>
          <Text style={styles.buttonText}>Back-end</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFilter}>
          <Text style={styles.buttonText}>Front-end</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFilter}>
          <Text style={styles.buttonText}>Otro</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default Filters;
