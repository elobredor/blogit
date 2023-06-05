import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerBoard: {
    height: 195,
    backgroundColor: "#3a3969",
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    width: 365,
  },
  containerHeader: { flexDirection: "row", justifyContent: "space-between" },
  dots: {
    alignSelf: "center",
  },
  //prev articles
  boardTitle: {
    color: "#f5f5f5",
    fontWeight: "500",
    fontSize: 20,
  },
  prevContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  textEmpty: { marginTop: 50, fontSize: 22, textAlign: "center" },
  prevArticle: {
    height: 100,
    width: 170,
    backgroundColor: "#222143",
    borderRadius: 14,
  },
  //prevCon
});

export default styles;
