import { useState } from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableWithoutFeedback, Modal, TouchableOpacity } from 'react-native';
import { iconsArticle } from "client/src/utils/iconOptions.js";
import { styles } from './ArticleScreen.styles';

export default function ArticleScreen ({ route }) {
  const [favorite, setFavorite] = useState(false);
  const [saved, setSaved] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false)

  const item = route.params;

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.authorView}>
            {iconsArticle.account.default}
            <View>
              <Text style={styles.authorName}>{item.user}</Text>
              <Text style={styles.timeDate}>{item.date}</Text>
              <Text style={styles.timeDate}>{item.time}</Text>
            </View>
          </View>
          <View style={styles.icons}>
            <TouchableWithoutFeedback onPress={() => setFavorite(!favorite)}>
              {!favorite ? iconsArticle.heart.empty : iconsArticle.heart.filled}
            </TouchableWithoutFeedback>
            <Text style={{ marginRight: 10 }}>{item.likes}</Text>
            {iconsArticle.comment}
            <Text style={{ marginLeft: 2 }}>{item.comments.length}</Text>
          </View>
        </View>
        
        <View style={styles.imageView}>
          <ImageBackground
            source={{ uri: item.image }}
            imageStyle={{ borderRadius: 10, height: 180 }}
          >
            <View style={styles.imageIcon}>
              <TouchableWithoutFeedback onPress={() => setSaved(!saved)}>
                {!saved ? iconsArticle.saved.default : iconsArticle.saved.focused}
              </TouchableWithoutFeedback>
            </View>
          </ImageBackground>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
        <Modal
          animationType='fade'
          transparent
          visible={modalVisibility}
        >
          <View
            style={styles.footModals}
          >
            <TouchableWithoutFeedback onPress={() => console.log('navigate to comments')}>
              <View style={styles.modalButtons}>
                {iconsArticle.commentModal}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => console.log('navigate to saved')}>
              <View style={styles.modalButtons}>
                {iconsArticle.saved.default}
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => setModalVisibility(false)}>
              <View style={styles.modalButtons}>
                {iconsArticle.cross}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Modal>
      </ScrollView>
      {!modalVisibility
        ? 
        <View style={styles.plusButton}>
          <TouchableOpacity onPress={() => setModalVisibility(true)}>
            {iconsArticle.plus}
          </TouchableOpacity>
        </View>
        : null}
    </>
  );
}
