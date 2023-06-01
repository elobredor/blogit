import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  subContainer: {
    marginTop: 60,
    width: '70%',
    gap: 10
  },
  textInput: {
    width: '85%',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },
  links: {
    flexDirection: 'row',
    gap: 10
  },
  linksText: {
    fontSize: 20
  }
});

export default styles;
