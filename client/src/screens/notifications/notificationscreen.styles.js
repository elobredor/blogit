import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxIcon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
    width: 320,
    height: 500,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    padding: 10,
  },
  title: {
    fontSize: 18,
    padding: 10,
    fontWeight: '300',
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginBottom: 20,
  },
  box: {
    width: '95%',
    gap: 20,
    alignSelf: 'center',
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  span: {
    fontWeight: '600',
  },
});
