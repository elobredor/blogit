import { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { iconsComments } from '../../../utils/iconOptions';

export default function CommentsScreen ({ route }) {
  const { comments } = route.params;
  const [responsesVisibility, setResponsesVisibility] = useState(true);

  // console.log(comments)

  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.commentView}>
              <View style={styles.authorView}>
                {iconsComments.account.default}
                <Text style={styles.authorName}>{item.author}</Text>
              </View>
              <Text>{item.content}</Text>
              <View style={styles.footerIcons}>
                <View style={styles.likeResIcons}>
                  <View style={{ flexDirection: 'row' }}>
                    {iconsComments.heart.empty}
                    <Text>{item.likes}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', gap: 2 }}>
                    {iconsComments.comment}
                    <Text>{item.responses.length}</Text>
                  </View>
                </View>
                <View style={styles.responseBtn}>
                  <TouchableOpacity onPress={() => console.log('Response pressed')}>
                    <Text>Responder</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd'
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
    alignItems: 'center'
  },
  authorName: {
    fontSize: 15,
    fontWeight: '500'
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  likeResIcons: {
    flexDirection: 'row',
    marginTop: '3%',
    gap: 10
  },
  responseBtn: {
    justifyContent: 'flex-end'
  }
})
