import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginBottom: 10,
    elevation: 10,
    minWidth: 365,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 190,
    padding: 15,
  },

  title: {
    fontSize: 20,
    marginBottom: 6,
    color: "white",
    fontWeight: "bold",
    maxWidth: 270,
  },
  btnFilter: {
    borderRadius: 8,
    backgroundColor: "white",
    fontSize: 15,
    fontWeight: "500",
    paddingHorizontal: 10,
    paddingVertical: 2,
    textAlign: "center",
    marginBottom: "15%",
  },
  profileImg: {
    width: 35,
    height: 35,
    marginRight: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
  },
  reactiveItems: {
    justifyContent: "space-between",
  },
  favorite: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
