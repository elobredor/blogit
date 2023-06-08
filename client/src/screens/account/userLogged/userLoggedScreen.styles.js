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
    marginTop: 60,
    width: '70%',
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
    paddingHorizontal: 10,
  },
  links: {
    flexDirection: 'row',
    gap: 10,
  },
  linksText: {
    color: '#f5f5f5',
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
  }
});

export default styles;
