import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './notificationscreen.styles';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { iconsNotifications } from '../../utils/iconOptions';
import { useFonts, Arimo_700Bold } from '@expo-google-fonts/arimo';
import { Nunito_400Regular } from '@expo-google-fonts/nunito';

const NotificationScreen = () => {
  let [loadedFonts] = useFonts({
    Arimo_700Bold,
    Nunito_400Regular,
  });
  const loggedUser = useSelector((state) => state.loggedUser);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch(`https://blogit.up.railway.app/api/notifications/${loggedUser._id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong');
        return res.json();
      })
      .then((data) => setNotifications(data))
      .catch((error) => console.error(error));
  }, []);

  if (!loadedFonts) return <View style={styles.container}></View>;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.boxIcon}>
          <Ionicons color={'#f5f5f5'} size={24} name='notifications-outline' />
        </View>

        <View style={{ width: '90%' }}>
          <Text style={styles.title}>Notificaciones</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.box}>
          <FlatList
            data={notifications}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => {
              return (
                <View style={styles.notificationContainer}>
                  <View style={styles.remitent}>
                    <Image
                      source={{ uri: item.originAvatar }}
                      style={styles.avatar}
                    />
                    <Text style={styles.user}>{item.originName}</Text>
                  </View>
                  <View style={styles.remitent}>
                    {item.notificationType === 'like'
                      ? iconsNotifications.like
                      : iconsNotifications.comment}
                    <Text style={styles.description}>{item.content}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
