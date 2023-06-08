import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  modalBg: {
    justifyContent: "flex-end",
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: "center",
    flex: 1,
  },
  modalContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: "65%",
    width: "95%",
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
    fontSize: 18,
    textAlign: "center",
    fontFamily: 'Arimo_400Regular',
    color: "#f5f5f5",
    fontWeight: "500",
  },
  
  //Info
  infoContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,    
    backgroundColor: "#3A3969",
  },
  
  input: {
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
    color: "#f5f5f5",
    borderBottomColor: "#f5f5f5",
    borderBottomWidth: 1,
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
