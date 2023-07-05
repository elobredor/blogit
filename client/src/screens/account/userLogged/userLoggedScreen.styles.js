import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020123',
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
    color: '#f5f5f5',
    fontSize: 20,
    fontFamily: 'Arimo_700Bold'
  },
  subContainer: {
    width: '70%',
    gap: 10
  },
  aboutContainer: {
    width: '60%',
    marginBottom: 30
  },
  aboutSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '85%',
    height: 120,
    marginBottom: 30,
    backgroundColor: '#3A3969',
    borderRadius: 12
  },
  textInput: {
    width: '85%',
    color: '#f5f5f5',
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    height: 120,
    paddingTop: 5,
    textAlignVertical: 'top',
    paddingHorizontal: 10,
  },
  links: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 5,
  },
  linksText: {
    color: '#f5f5f5',
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
  }
});

export default styles;
