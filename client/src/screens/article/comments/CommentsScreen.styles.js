import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  commentView: {
    marginVertical: '5%',
    marginHorizontal: '3%',
    paddingBottom: '2%',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  authorView: {
    flexDirection: 'row',
    marginBottom: '2%',
    alignItems: 'center',
    gap: 8,
  },
  authorName: {
    fontSize: 15,
    fontWeight: '500',
  },
  timeLapse: {
    fontSize: 12,
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeResIcons: {
    flexDirection: 'row',
    marginTop: '3%',
    gap: 10,
  },
  responseBtn: {
    justifyContent: 'flex-end',
  },
  repliesView: {
    marginVertical: '5%',
    marginLeft: '8%',
  },
  replying: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#aaa',
    backgroundColor: '#888',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  commentContainer: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#888',
    gap: 10,
  },
  commentInput: {
    flex: 2,
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
