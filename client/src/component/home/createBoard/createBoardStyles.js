import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  modalBg: {
    justifyContent: "flex-end",
    marginBottom: 70,
    alignItems: "center",
    flex: 1,
  },
  modalContainer: {
    height: "65%",
    width: "95%",
    borderRadius: 15,
    backgroundColor: "#090841",
    gap: 10,
    elevation: 5,
  },
  // Focus Board

  leftSide: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#f5f5f5",
    fontWeight: "500",
  },

  //Info
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#3A3969",
  },

  input: {
    fontSize: 18,
    color: "#f5f5f5",
    borderBottomColor: "#f5f5f5",
    borderBottomWidth: 2,
    width: "90%",
    alignSelf: "center",
    padding: 4,
    marginVertical: 10,
  },
  inputError: {
    fontSize: 18,
    color: "red",
    borderBottomColor: "red",
    borderColor: "#555",
    borderWidth: 2,
    width: "90%",
    alignSelf: "center",
    padding: 4,
    marginVertical: 10,
  },
});
