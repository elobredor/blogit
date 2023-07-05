import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginVertical: 9,
    elevation: 10,
    width: 355,
    overflow: 'hidden'
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 180,
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
    marginBottom: 6,
    color: "white",
    fontWeight: 'normal',
    fontFamily: 'Arimo_700Bold',
    maxWidth: 275,
  },
  btnFilter: {
    borderRadius: 6,
    backgroundColor: "white",
    fontSize: 12,
    fontWeight: "500",
    paddingHorizontal: 10,
    paddingVertical: 2,
    textAlign: "center",
    
  },
  profileImg: {
    width: 30,
    height: 30,
    marginRight: 8,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white",
  },
  reactiveItems: {
    justifyContent: "flex-end",
  },
  selected: {width: 30, height: 30, borderRadius: 20, backgroundColor: '#0D47A1'},
  unselected: {width: 30, height: 30, borderRadius: 20, backgroundColor: '#f5f5f5'},
  favorite: {
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
