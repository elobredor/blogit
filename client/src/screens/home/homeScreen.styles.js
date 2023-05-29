import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 17,
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  profilePh: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
  },
  logo: {
    fontSize: 26,
    marginLeft: "33%",
  },
});
