import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020123',
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 17,
    paddingVertical: 10
  },
  header: {
    marginTop: 24,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 18
  },
  profilePh: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
  },
  logo: {
    fontSize: 28,
    fontFamily: 'Arimo_700Bold',
    marginLeft: "30%",
    color: '#f5f5f5',
  },
});
