import { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image
} from 'react-native';
import { iconsComments } from '../../../utils/iconOptions';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../../../redux/actions';
import { timeLapse } from '../../../utils/timeLapse';
import { MY_IP } from "react-native-dotenv";

const replyInitialState = {
  status: false,
  receiver: '',
  commentId: '',
};

export default function CommentsScreen() {
  const dispatch = useDispatch();
  const { comments, _id } = useSelector((state) => state.details);
  const loggedUser = useSelector((state) => {
    return state.logged ? state.loggedUser : null;
  });
  const inputRef = useRef(null);
  const commentListRef = useRef(null);
  const replyListRef = useRef(null);
  const [replying, setReplying] = useState(replyInitialState);
  const [articleComment, setArticleComment] = useState('');
  const [reply, setReply] = useState('');
  const [repliesVisibility, setRepliesVisibility] = useState('');

  // INPUT_FOCUS
  useEffect(() => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
  }, []);

  // COMMENT_SCROLLING
  useEffect(() => {
    if (!repliesVisibility && comments.length > 0) {
      commentListRef.current.scrollToEnd({ animated: true });
    }
  }, [comments]);

  // HANDLE_COMMENT_INPUT
  const handleArticleCommentChange = (text) => {
    setArticleComment(text);
  };

  // POST_COMMENT
  const handleArticleCommentSubmit = () => {
    Keyboard.dismiss();
    const commentBody = {
      postId: _id,
      userId: loggedUser._id,
      userName: loggedUser.userName,
      comment: articleComment,
      profileImage: loggedUser.profileImage
    };
    setArticleComment('');
    fetch(`http://${MY_IP}:4000/api/comments/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentBody),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong');
        dispatch(getDetails(_id));
      })
      .catch(() => dispatch(getDetails(_id)));
  };

  // LIKE/UNLIKE_COMMENT
  const handleLikeComment = (commentId) => {
    const likeCommentBody = {
      userId: loggedUser._id,
      commentId
    }
    fetch(`http://${MY_IP}:4000/api/comments/like/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(likeCommentBody)
    })
      .then(res => {
        if (!res.ok) throw new Error('Something went wrong');
        dispatch(getDetails(_id))
      })
      .catch(() => dispatch(getDetails(_id)));
  };

  // LIKE/UNLIKE_REPLY
  const handleLikeReply = (commentId, replyCommentId) => {
    const likeReplyBody = {
      userId: loggedUser._id,
      replyCommentId
    };

    fetch(`http://${MY_IP}:4000/api/comments/reply/like/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(likeReplyBody)
    })
      .then(res => {
        if (!res.ok) throw new Error('Something went wrong');
        dispatch(getDetails(_id))
      })
      .catch(() => dispatch(getDetails(_id)));
  };

  // HANDLE_REPLIES_VISIBILITY
  const handleRepliesVisibility = (id) => {
    setRepliesVisibility(id);
  };

  // SET_REPLY_INPUT_FOCUS
  const handleReply = (comment) => {
    setReplying({
      status: true,
      receiver: comment.userName,
      commentId: comment._id,
    });
    setReply(`@${comment.userName} `);
    inputRef.current.focus();
  };

  // POST_REPLY_REPLY
  const handleReplyReply = (reply) => {
    setReplying({
      status: true,
      receiver: reply.userName,
      commentId: reply.commentId,
    });
    setReply(`@${reply.userName} `);
    inputRef.current.focus();
  };

  // HANDLE_REPLY_INPUT
  const handleReplyChange = (text) => {
    setReply(text);
  };

  // POST_REPLY
  const handleReplySubmit = () => {
    Keyboard.dismiss();
    const replyBody = {
      userId: loggedUser._id,
      userName: loggedUser.userName,
      comment: reply,
      profileImage: loggedUser.profileImage
    };
    // console.log(replyBody);
    setReplying(replyInitialState);
    fetch(`http://${MY_IP}:4000/api/comments/reply/${replying.commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(replyBody),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong');
        dispatch(getDetails(_id));
        return res.json();
      })
      .then(data => console.log(data))
      .catch(() => dispatch(getDetails(_id)));
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={commentListRef}
        data={comments}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.commentView}>
              <View style={styles.authorView}>
                <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: item.profileImage }} />
                <View>
                  <Text style={styles.authorName}>{item.userName}</Text>
                  <Text style={styles.timeLapse}>
                    {timeLapse(item.createdAt)}
                  </Text>
                </View>
              </View>
              <Text>{item.comment}</Text>
              <View style={styles.footerIcons}>
                <View style={styles.likeResIcons}>
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => handleLikeComment(item._id)}>
                      {item.commentLikes.includes(loggedUser._id) ? iconsComments.heart.filled : iconsComments.heart.empty}
                    </TouchableOpacity>
                    <Text>{item.commentLikes.length}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', gap: 2 }}>
                    <TouchableOpacity onPress={() => handleRepliesVisibility(item._id)}>
                      {iconsComments.comment}
                    </TouchableOpacity>
                    <Text>{item.replyComment.length}</Text>
                  </View>
                </View>
                <View style={styles.responseBtn}>
                  <TouchableOpacity onPress={() => handleReply(item)}>
                    <Text>Responder</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {repliesVisibility === item._id && item.replyComment.length > 0 && (
                <View style={styles.repliesView}>
                  <FlatList
                    ref={replyListRef}
                    data={item.replyComment.map(r => {return{...r, commentId: item._id}})}
                    keyExtractor={(reply) => reply._id.toString()}
                    renderItem={({ item }) => {
                      return (
                        <View style={{ marginVertical: '3%' }}>
                          <View style={styles.authorView}>
                          <Image style={{ width: 40, height: 40, borderRadius: 20 }} source={{ uri: item.profileImage }} />
                            <View>
                              <Text style={styles.authorName}>
                                {item.userName}
                              </Text>
                              <Text style={styles.timeLapse}>
                                {timeLapse(item.createdAt)}
                              </Text>
                            </View>
                          </View>
                          <Text>{item.comment}</Text>
                          <View style={styles.footerIcons}>
                            <View style={styles.likeResIcons}>
                              <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => handleLikeReply(item.commentId, item._id)}>
                                  {item.commentLikes.includes(loggedUser._id) ? iconsComments.heart.filled : iconsComments.heart.empty}
                                </TouchableOpacity>
                                <Text>{item.commentLikes.length}</Text>
                              </View>
                            </View>
                            <View style={styles.responseBtn}>
                              <TouchableOpacity
                                onPress={() => handleReplyReply(item)}
                              >
                                <Text>Responder</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      );
                    }}
                  />
                </View>
              )}
            </View>
          );
        }}
      />
      {replying.status && (
        <View style={styles.replying}>
          <Text>Respondiendo a {replying.receiver}</Text>
          <TouchableWithoutFeedback
            onPress={() => setReplying(replyInitialState)}
          >
            <Text style={{ fontSize: 18 }}>x</Text>
          </TouchableWithoutFeedback>
        </View>
      )}
      <View style={styles.commentContainer}>
        <TextInput
          ref={inputRef}
          style={styles.commentInput}
          placeholder={replying.status ? '¿Cuál es tu respuesta?' : '¿Cuál es tu opinión?'}
          multiline={true}
          onChangeText={
            replying.status ? handleReplyChange : handleArticleCommentChange
          }
          value={replying.status ? reply : articleComment}
        />
        <TouchableOpacity
          onPress={
            replying.status ? handleReplySubmit : handleArticleCommentSubmit
          }
        >
          <View style={{ backgroundColor: '#fff', borderRadius: 20 }}>
            {iconsComments.send}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
