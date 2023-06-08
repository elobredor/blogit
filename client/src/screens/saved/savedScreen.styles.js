import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  savedContainer: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#020123",
  },
  containerEdit: {
    width: "100%",
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#3A3969",
    gap: 10,
    elevation: 5,
    display: "flex",
  },
  inputEdit: {
    backgroundColor: "white",
    width: "70%",
    color: "#222143",
    fontSize: 20,
    borderRadius: 5,
    fontWeight: "bold",
  },
});
