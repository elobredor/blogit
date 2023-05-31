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
    maxHeight: "50%",
    borderRadius: 15,
    backgroundColor: "#555",
    gap: 10,
    elevation: 5,
  },
  // Focus Board
  defaultContainer: {
    flexDirection: "row",
    backgroundColor: "#999",
    borderTopStartRadius: 14,
    borderTopEndRadius: 14,
    padding: 15,
    justifyContent: "space-between",
  },
  leftSide: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  miniPrev: {
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  },
  rigthSide: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  //Info
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  boardContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
  },
});
