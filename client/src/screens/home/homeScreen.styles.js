import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  containerFilter: {
    height: 40,
    marginBottom: 10,
    marginHorizontal: 25,
  },
  btnFilter: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "#bbb",
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },

  containerSearch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "25%",
    marginBottom: 30,
  },
  inputSearch: {
    height: 40,
    color: "white",
    borderRadius: 10,
    paddingHorizontal: 135,
    backgroundColor: "#bbb",
    fontSize: 24,
  },
});
