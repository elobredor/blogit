import React from "react";
import { View, TextInput } from "react-native";
import { styles } from "./SearchBarStyles";

const SearchBar = () => {
  return (
    <View style={styles.containerSearch}>
      <TextInput
        style={styles.inputSearch}
        placeholder="  Blogs..."
        placeholderTextColor="white"
      />
    </View>
  );
};
export default SearchBar;
