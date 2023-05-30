import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderTopWidth: 2,
    borderTopColor: '#302962',
    flex: 1,
    backgroundColor: '#020123',
    // backgroundColor: '#090841',
  },
  noCommentView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noCommentText: {
    color: 'rgba(250,250,250,0.5)',
    fontSize: 18
  },
  commentView: {
    marginVertical: '5%',
    paddingBottom: 9,
    marginHorizontal: '3%',
    borderBottomWidth: 2,
    borderBottomColor: '#302962',
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
    color: '#f5f5f5'
  },
  timeLapse: {
    fontSize: 12,
    color: '#f5f5f5'
  },
  commentText: {
    fontSize: 16,
    color: '#f5f5f5'
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeResIcons: {
    flexDirection: 'row',
    marginTop: '3%',
    gap: 18,
  },
  responseBtn: {
    justifyContent: 'flex-end',
  },
  repliesView: {
    marginTop: '2%',
    marginLeft: '8%',
  },
  replyText: {
    color: '#f5f5f5',
    fontSize: 16
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
    alignItems: 'center',
    padding: 20,
    height: 70,
    backgroundColor: '#3a3969',
    gap: 10,
    overflow: 'hidden'
  },
  commentInput: {
    flex: 2,
    borderRadius: 15,
    borderWidth: 2.5,
    borderColor: 'rgba(0,0,0,0.1)',
    backgroundColor: '#090841',
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#f5f5f5',
    minHeight: 46
  },
});
