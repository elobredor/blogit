import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginBottom: 10,
    elevation: 10,
    width: 355,
    overflow: 'hidden'
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 156,
    paddingHorizontal: 18,
    paddingVertical: 12,
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
  },
  profileImg: {
    width: 30,
    height: 30,
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
