import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerBoard: {
    // height: 195,
    backgroundColor: "#3a3969",
    borderRadius: 10,
    width: 358,
    paddingTop: 12,
    paddingBottom: 8,
    marginBottom: 18,
  },
  //prev articles
  boardTitle: {
    fontFamily: 'Arimo_400Regular',
    color: '#f5f5f5',
    fontWeight: "500",
    fontSize: 18,
    marginLeft: 16,
  },
  prevContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    marginHorizontal: 6,
    gap: 6,
  },
  textEmpty: {
    fontSize: 22,
    textAlign: "center",
  },
  prevArticle: {
    height: 100,
    width: 170,
    backgroundColor: "#222143",
    borderRadius: 8,
  },
  //prevCon
});

export default styles;
