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
    backgroundColor: '#3A3969',
    gap: 10,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  info: {
    color: '#f5f5f5',
    fontSize: 16,
  },
  link: {
    color: "#37B4A1",
    fontSize: 18,
    fontWeight: 500,
  },
  boardName: {
    color: '#f5f5f5',
    fontSize: 16,
    fontWeight: "bold",
  },
});
