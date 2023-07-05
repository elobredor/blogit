import { StyleSheet } from 'react-native';

export const tagsStyles = {
  h1: {
    fontSize: '32px',
    fontWeight: 'normal',
    color: '#f5f5f5',
    fontFamily: 'Arimo_700Bold',
  },
  h2: {
    fontSize: '26px',
    fontWeight: 'normal',
    color: '#f5f5f5',
    fontFamily: 'Nunito_500Medium',
  },
  p: {
    lineHeight: '2.4rem',
    fontSize: '22px',
    color: '#f5f5f5',
    fontFamily: 'Nunito_500Medium',
  },
  li: {
    lineHeight: '2.4rem',
    fontSize: '22px',
    color: '#f5f5f5'
  },
  code: {
    fontSize: '15px'
  }
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020123',
    paddingHorizontal: 17,
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#020123',
    borderBottomWidth: 1,
    borderBottomColor: '#102962',
    paddingVertical: '2%',
  },
  authorView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  authorImage: {
    marginTop: 6,
    width: 40,
    height: 40,
    borderRadius: 30,
    marginHorizontal: 17,
  },
  authorName: {
    fontFamily: 'Arimo_700Bold',
    fontSize: 18,
    color: '#f5f5f5',
  },
  timeDate: {
    fontSize: 10,
    color: '#f5f5f5',
  },
  icons: {
    flexDirection: 'row',
    gap: 20,
    paddingRight: 10,
  },
  iconCounters: {
    color: '#f5f5f5',
    marginTop: 5
  },
  title: {
    fontSize: 25,
    marginBottom: '5%',
  },
  imageView: {
    height: 180,
    marginVertical: '5%',
  },
  imageIcon: {
    alignItems: 'flex-end',
    padding: '2%',
  },
  content: {
    marginBottom: '10%',
  },
  footModals: {
    position: 'absolute',
    top: '70%',
    bottom: '8%',
    right: '5%',
    padding: '3%',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalButtons: {
    flex: 1,
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginVertical: '10%',
    elevation: 5
  },
  plusButton: {
    position: 'absolute',
    bottom: '2.6%',
    right: '5.5%',
    borderRadius: 30,
    padding: '2.6%',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  }
});
