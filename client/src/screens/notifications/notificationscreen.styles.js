import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020123',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxIcon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  content: {
    width: 320,
    height: 500,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    color: '#f5f5f5',
    fontSize: 18,
    padding: 10,
    fontWeight: '300',
  },
  divider: {
    height: 1,
    backgroundColor: '#f5f5f5',
    marginBottom: 20,
  },
  box: {
    width: '95%',
    gap: 20,
    alignSelf: 'center',
  },
  description: {
    color: '#f5f5f5',
    fontSize: 14,
    marginBottom: 5,
  },
  span: {
    fontWeight: '600',
  },
});
