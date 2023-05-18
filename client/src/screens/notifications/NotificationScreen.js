import { View, Text } from 'react-native';
import { styles } from './notificationscreen.styles';
import { Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.boxIcon}>
          <Ionicons color={'grey'} size={28} name='notifications' />
        </View>

        <View style={{ width: '90%' }}>
          <Text style={styles.title}>Notificaciones</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.box}>
          <View style={styles.row}>
            <AntDesign name='heart' size={18} color='gray' />
            <View>
              <Text style={styles.description}>
                Recibiste un me gusta en tu comentario
              </Text>
              <Text style={[styles.description, styles.span]}>
                Comentario que respondio el 'Usuario'
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <MaterialIcons name='comment' size={18} color='gray' />
            <View>
              <Text style={styles.description}>
                Usuario ha respondido tu comentario
              </Text>
              <Text style={[styles.description, styles.span]}>
                Respuesta del comentario del 'Usuario'
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <AntDesign name='heart' size={18} color='gray' />
            <View>
              <Text style={styles.description}>
                Recibiste un me gusta en tu comentario
              </Text>
              <Text style={[styles.description, styles.span]}>
                Comentario que respondio el 'Usuario'
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <MaterialIcons name='comment' size={18} color='gray' />
            <View>
              <Text style={styles.description}>
                Usuario ha respondido tu comentario
              </Text>
              <Text style={[styles.description, styles.span]}>
                Respuesta del comentario del 'Usuario'
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationScreen;
