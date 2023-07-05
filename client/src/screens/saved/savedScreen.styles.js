import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  savedContainer: {
    borderTopWidth: 2,
    borderTopColor: '#102962',
    flex: 1,
    paddingVertical: 18,
    paddingHorizontal: 17,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#020123",
  },
  containerEdit: {
    width: "100%",
    padding: 5,
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#3A3969",
    gap: 10,
    elevation: 5,
    display: "flex",
  },
  inputEdit: {
    width: "99%",
    backgroundColor: "#090841",
    color: "#f5f5f5",
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
});
