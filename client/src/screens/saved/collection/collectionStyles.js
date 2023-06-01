import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  colecctionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#020123',
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
    color: '#f5f5f5',
    fontSize: 26,
    fontWeight: "500",
  },
  descri: {
    color: '#f5f5f5',
    fontSize: 14,
  },
  dots: { alignSelf: "center", marginRight: 10 },
});
