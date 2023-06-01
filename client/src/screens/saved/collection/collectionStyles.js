import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  colecctionContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    margin: 12,
  },
  textContainer: {
    textAlign: "left",
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 26,
    fontWeight: "500",
  },
  descri: {
    fontSize: 24,
  },
  dots: { alignSelf: "center", marginRight: 10 },
});
