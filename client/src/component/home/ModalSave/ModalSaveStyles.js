import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  modalBack: {
    justifyContent: "flex-end",
    marginBottom: 70,
    alignItems: "center",
    flex: 1,
  },
  modalFront: {
    width: "90%",
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#eee",
    gap: 10,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
