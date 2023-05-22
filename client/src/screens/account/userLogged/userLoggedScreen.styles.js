import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 100,
    marginTop: 50,
  },
  content: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  avatar: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  boxBtns: {
    width: width * 0.6,
    paddingHorizontal: 10,
    gap: 10,
  },
  btnBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
