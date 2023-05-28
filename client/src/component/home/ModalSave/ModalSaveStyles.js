import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  modalBg: {
    justifyContent: "flex-end",
    marginBottom: 70,
    alignItems: "center",
    flex: 1,
  },
  modalContainer: {
    width: "95%",
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#eee",
    gap: 10,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    fontSize: 16,
  },
  link: {
    color: "#00f",
    fontSize: 18,
    fontWeight: 500,
  },
  boardName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
