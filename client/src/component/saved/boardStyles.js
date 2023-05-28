import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerBoard: {
    height: 195,
    backgroundColor: "#ccc",
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    width: 340,
  },
  boardTitle: { fontWeight: "500", fontSize: 20 },
  prevContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  textEmpty: { marginTop: 50, fontSize: 22, textAlign: "center" },
  prevArticle: { height: 100, width: 155 },
});
export default styles;
