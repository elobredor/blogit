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
    borderColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    color: '#f5f5f5',
    fontSize: 18,
    padding: 10,
    fontFamily: 'Arimo_700Bold'
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
  notificationContainer: {
    marginBottom: 20
  },
  description: {
    color: '#f5f5f5',
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'Nunito_400Regular',
  },
  user: {
    color: '#f5f5f5',
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'Arimo_700Bold',
  },
  remitent: {
    flexDirection: 'row',
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 20,
    marginRight: 5
  }
});
