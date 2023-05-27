import { StyleSheet } from 'react-native';

export const tagsStyles = {
  h1: {
    fontSize: '32px',
    fontWeight: 'normal',
    // fontFamily: 'JosefinSans_700Bold'
  },
  h2: {
    fontSize: '26px',
    fontWeight: 'normal',
    // fontFamily: 'JosefinSans_700Bold'
  },
  p: {
    lineHeight: '2.4rem',
    fontSize: '22px',
    // fontFamily: 'JosefinSans_500Medium'
  },
  li: {
    lineHeight: '2rem',
    fontSize: '22px',
  },
  code: {
    fontSize: '15px'
  }
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingHorizontal: '3%'
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: '3%'
  },
  authorView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  authorImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginHorizontal: 8
  },
  authorName: {
    fontSize: 22,
  },
  timeDate: {
    fontSize: 10
  },
  icons: {
    flexDirection: 'row',
    gap: 20,
    paddingRight: 10
  },
  title: {
    fontSize: 25,
    marginBottom: '5%'
  },
  imageView: {
    height: 156,
    marginVertical: '5%'
  },
  imageIcon: {
    alignItems: 'flex-end',
    padding: '2%'
  },
  content: {
    marginBottom: '10%'
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
