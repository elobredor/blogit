import { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  Modal,
  Dimensions
} from 'react-native';
import { styles } from './CommentsScreen.styles';
import { iconsComments } from '../../../utils/iconOptions';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../../../redux/actions';
import { timeLapse } from '../../../utils/timeLapse';
import { LinearGradient } from 'expo-linear-gradient';
import { MY_IP } from 'react-native-dotenv';

const replyInitialState = {
  status: false,
  receiver: '',
  commentId: '',
};

const { width } = Dimensions.get('window');

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
  const [editDelete, setEditDelete] = useState('');
  const [deletionType, setDeletionType] = useState('');
  const [deteleVisibility, setDeteleVisibility] = useState(false);

  // INPUT_FOCUS
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // COMMENT_SCROLLING
  useEffect(() => {
    if (!repliesVisibility && comments.length > 0) {
      commentListRef.current.scrollToEnd({ animated: true });
    }
  }, [comments]);

  // HANDLE_COMMENT_CHANGE
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
      profileImage: loggedUser.profileImage,
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
      commentId,
    };
    fetch(`http://${MY_IP}:4000/api/comments/like/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(likeCommentBody),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong');
        dispatch(getDetails(_id));
      })
      .catch(() => dispatch(getDetails(_id)));
  };

  // LIKE/UNLIKE_REPLY
  const handleLikeReply = (commentId, replyCommentId) => {
    const likeReplyBody = {
      userId: loggedUser._id,
      replyCommentId,
    };

    fetch(`http://${MY_IP}:4000/api/comments/reply/like/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(likeReplyBody),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong');
        dispatch(getDetails(_id));
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
      profileImage: loggedUser.profileImage,
    };
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
      .then((data) => console.log(data))
      .catch(() => dispatch(getDetails(_id)));
  };

  // DELETE_COMMENT/REPLY
  const deleteComment = () => {
    if (deletionType === 'comment') {
      fetch(`http://${MY_IP}:4000/api/comments/delete/${editDelete}`, {
        method: 'DELETE',
        headers: {
          'Content-Type':'application/json'
        }})
        .then(res => {
          if (res.ok) dispatch(getDetails(_id));
          else throw new Error('No response from server')
        })
        .catch(error => console.log(error));
    } else if (deletionType === 'reply') {
      fetch(`http://${MY_IP}:4000/api/comments/reply-delete/${editDelete}`, {
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }})
      .then(res => {
        if (res.ok) dispatch(getDetails(_id));
        else throw new Error('No response from server')
      })
      .catch(error => console.log(error));
    } else {
      console.log('Invalid deletion process')
    }
    setDeteleVisibility(false);
  };

  return (
    <View style={styles.container}>
      {!comments.length ? (
        <View style={styles.noCommentView}>
          <Text style={styles.noCommentText}>
            ¡Hola, {loggedUser.userName}!
          </Text>
          <Text>{'\n'}</Text>
          <Text style={styles.noCommentText}>El primer comentario está</Text>
          <Text style={styles.noCommentText}>esperando por tí.</Text>
          <Text>{'\n\n\n\n'}</Text>
        </View>
      ) : (
        <FlatList
          ref={commentListRef}
          data={comments}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.commentView}>
                <View style={styles.authorView}>
                  <Image
                    style={{ width: 40, height: 40, borderRadius: 20 }}
                    source={{ uri: item.profileImage }}
                  />
                  <View>
                    <View style={{flex: 1, width: width * 0.82, flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={styles.authorName}>{item.userName}</Text>
                      {editDelete === item._id
                        ? <View style={{flexDirection: 'row', gap: 15}}>
                            <TouchableOpacity onPress={() => {
                              setDeletionType('comment')
                              setDeteleVisibility(true);
                            }}>
                              {iconsComments.trash}
                            </TouchableOpacity>
                            <TouchableOpacity>
                              {iconsComments.edit}
                            </TouchableOpacity>
                          </View>
                        : <TouchableOpacity onPress={() => setEditDelete(item._id)}>
                            {loggedUser.userName === item.userName && iconsComments.dots}
                          </TouchableOpacity>
                      }                      
                    </View>
                    <Text style={styles.timeLapse}>
                      {timeLapse(item.createdAt)}
                    </Text>
                  </View>
                </View>
                <Text style={styles.commentText}>{item.comment}</Text>
                <View style={styles.footerIcons}>
                  <View style={styles.likeResIcons}>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity
                        onPress={() => handleLikeComment(item._id)}
                      >
                        {item.commentLikes.includes(loggedUser._id)
                          ? iconsComments.heart.filled
                          : iconsComments.heart.empty}
                      </TouchableOpacity>
                      <Text style={{ color: '#f5f5f5', fontSize: 13 }}>
                        {item.commentLikes.length}
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity
                        onPress={() => handleRepliesVisibility(item._id)}
                      >
                        {iconsComments.comment}
                      </TouchableOpacity>
                      <Text style={{ color: '#f5f5f5', fontSize: 13 }}>
                        {item.replyComment.length}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.responseBtn}>
                    <TouchableOpacity onPress={() => handleReply(item)}>
                      <Text style={{ color: '#f5f5f5' }}>Responder</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {repliesVisibility === item._id &&
                  item.replyComment.length > 0 && (
                    <View style={styles.repliesView}>
                      <FlatList
                        ref={replyListRef}
                        data={item.replyComment.map((r) => {
                          return { ...r, commentId: item._id };
                        })}
                        keyExtractor={(reply) => reply._id.toString()}
                        renderItem={({ item }) => {
                          return (
                            <View style={{ marginTop: '3%' }}>
                              <View style={styles.authorView}>
                                <Image
                                  style={{
                                    width: 40,
                                    height: 40,
                                    borderRadius: 20,
                                  }}
                                  source={{ uri: item.profileImage }}
                                />
                                <View>
                                  <View style={{flex: 1, width: width * 0.75, flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text style={styles.authorName}>{item.userName}</Text>
                                    {editDelete === item._id
                                      ? <View style={{flexDirection: 'row', gap: 15}}>
                                          <TouchableOpacity onPress={() => {
                                            setDeletionType('reply');
                                            setDeteleVisibility(true);
                                          }}>
                                            {iconsComments.trash}
                                          </TouchableOpacity>
                                          <TouchableOpacity>
                                            {iconsComments.edit}
                                          </TouchableOpacity>
                                        </View>
                                      : <TouchableOpacity onPress={() => setEditDelete(item._id)}>
                                          {loggedUser.userName === item.userName && iconsComments.dots}
                                        </TouchableOpacity>
                                    }
                                  </View>
                                  <Text style={styles.timeLapse}>
                                    {timeLapse(item.createdAt)}
                                  </Text>
                                </View>
                              </View>
                              <Text style={styles.replyText}>
                                {item.comment}
                              </Text>
                              <View style={styles.footerIcons}>
                                <View style={styles.likeResIcons}>
                                  <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity
                                      onPress={() =>
                                        handleLikeReply(
                                          item.commentId,
                                          item._id
                                        )
                                      }
                                    >
                                      {item.commentLikes.includes(
                                        loggedUser._id
                                      )
                                        ? iconsComments.heart.filled
                                        : iconsComments.heart.empty}
                                    </TouchableOpacity>
                                    <Text style={{ color: '#f5f5f5' }}>
                                      {item.commentLikes.length}
                                    </Text>
                                  </View>
                                </View>
                                <View style={styles.responseBtn}>
                                  <TouchableOpacity
                                    onPress={() => handleReplyReply(item)}
                                  >
                                    <Text style={{ color: '#f5f5f5' }}>
                                      Responder
                                    </Text>
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
      )}
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
        <LinearGradient
          colors={['#34aba6', '#131af8', '#9344ca']}
          start={[0, 0]}
          end={[1, 0]}
          locations={[0, 0.5, 1]}
          style={{ flex: 1, minHeight: 46, borderRadius: 15 }}
        >
          <TextInput
            ref={inputRef}
            style={styles.commentInput}
            placeholder={
              replying.status
                ? '¿Cuál es tu respuesta?'
                : '¿Cuál es tu opinión?'
            }
            placeholderTextColor={'#f5f5f5'}
            multiline={true}
            onChangeText={
              replying.status ? handleReplyChange : handleArticleCommentChange
            }
            value={replying.status ? reply : articleComment}
          />
        </LinearGradient>
        <TouchableOpacity
          onPress={
            replying.status ? handleReplySubmit : handleArticleCommentSubmit
          }
        >
          <View style={{ backgroundColor: '#3a3969', borderRadius: 20 }}>
            {articleComment.length || reply.length ? (
              <Image
                source={require('../../../../assets/send-active.png')}
                style={{ width: 40, height: 40 }}
              />
            ) : (
              <Image
                source={require('../../../../assets/send-inactive.png')}
                style={{ width: 40, height: 40 }}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
      <Modal visible={deteleVisibility} transparent>
        <View style={styles.modalDeleteBack}>
          <View style={styles.modalDeleteFront}>
            <Text style={styles.modalDeleteText}>¿Deseas borrar este comentario?</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center', gap: 30}}>
              <TouchableOpacity onPress={deleteComment} style={styles.modalDeleteBtn}>
                <Text style={styles.modalDeleteText}>Si</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setDeteleVisibility(false)} style={styles.modalDeleteBtn}>
                <Text style={styles.modalDeleteText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
