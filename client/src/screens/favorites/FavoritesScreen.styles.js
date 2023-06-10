import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020123',
    paddingHorizontal: 18
  },
  selectionBtn: {
    alignSelf: 'flex-end'
  },
  selectionText: {
    color: '#f5f5f5',
    fontSize: 20
  },
  
  dislike: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a3969',
    width: Dimensions.get('window').width,
  },
  dislikeText: {
    color: 'red'
  }
});

export default styles;