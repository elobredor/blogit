import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#020123'
  },
  inputGradient: {
    marginVertical: 20,
    minHeight: 46,
    borderRadius: 18,
  },
  inputContainer: {
    flex: 1,
    width: width * 0.9,
    backgroundColor: '#020123',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 18,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 3,
    paddingHorizontal: 10,
  },
  textInput: {
    width: '80%',
    color: '#f5f5f5',
    fontFamily: 'Nunito_400Regular',
    fontSize: 18
  },
  sortBtnsContainer: {
    borderTopColor: '#102962',
    borderTopWidth: 2,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width,
    gap: 12,
    marginBottom: 10,
  },
  sortBtn: {
    paddingHorizontal: 12,
    height: 34,
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#007764',
  },
  sortBtnActive: {
    paddingHorizontal: 12,
    height: 34,
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: '#37b4a1',
  },
  sortBtnText: {
    color: '#020123',
    fontSize: 18,
    fontFamily: 'Arimo_400Regular',
  },
  noResults: {
    color: '#f5f5f5',
    fontSize: 20,
    fontFamily: 'Arimo_400Regular',
  }
});

export default styles;
