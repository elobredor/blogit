import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginBottom: 10,
    elevation: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    minHeight: 170,
    padding: 15,
  },

  title: {
    fontSize: 20,
    marginBottom: 6,
    color: "white",
    fontWeight: "bold",
    maxWidth: "90%",
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
});
