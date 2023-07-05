import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020123',
    padding: 17,
  },
  header: {
    color: '#f5f5f5',
    fontSize: 22,
    fontFamily: 'Arimo_500Medium',
  },
  inputsContainer: {
    alignItems: 'center',
    gap: 10, marginTop: 50
  },
  linkInput: {
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    height: 40,
    width: '80%',
    color: '#f5f5f5',
  },
  deleteBtn: {
    color: '#f50000'
  }
});

export default styles;
