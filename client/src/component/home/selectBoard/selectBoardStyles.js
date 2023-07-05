import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  modalBg: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: "flex-end",
    paddingBottom: 30,
    alignItems: "center",
    flex: 1,
  },
  modalContainer: {
    width: "95%",
    maxHeight: "50%",
    borderRadius: 15,
    backgroundColor: "#3A3969",
    elevation: 5,
  },
  // Focus Board
  defaultContainer: {
    flexDirection: "row",
    backgroundColor: "#2e2d4f",
    borderTopStartRadius: 14,
    borderTopEndRadius: 14,
    padding: 15,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: '#201952', 
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
    borderRadius: 10,
    overflow: "hidden",
  },
  text: {
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
    textAlign: "center",
    color: "#f5f5f5",
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
    padding: 15,
  },
  boardContainer: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
  },
});
