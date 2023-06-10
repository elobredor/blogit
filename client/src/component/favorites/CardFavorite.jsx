import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  ImageBackground,
  Text,
  Image,
} from 'react-native';
import { styles } from './CardFavorite.styles';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const CardFavorite = ({ item, selectedCards, setSelectedCards, selection }) => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(
    selectedCards.some((el) => el === item._id)
  );

  useEffect(() => {
    setSelected(selectedCards.some((el) => el === item._id));
  }, [selectedCards])

  const handleSelection = () => {
    if (selected) {
      setSelectedCards([...selectedCards].filter((el) => el !== item._id));
      setSelected(false);
    } else {
      setSelectedCards([...selectedCards, item._id]);
      setSelected(true);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('article', item._id)}
      >
        <View style={styles.card}>
          <ImageBackground
            source={{ uri: item.images }}
            imageStyle={{ borderRadius: 10 }}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}
              start={[1, 0]}
              end={[1, 1]}
              locations={[0.1, 1]}
              style={{ flex: 1 }}
            >
              <View style={styles.content}>
                <View style={{ justifyContent: 'space-between' }}>
                  <View
                    style={{ flexDirection: 'row', alignSelf: 'flex-start' }}
                  >
                    <Text style={styles.btnFilter}>{item.category}</Text>
                  </View>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Image
                        source={{ uri: item.profileImage }}
                        style={styles.profileImg}
                      />
                      <Text style={{ color: 'white', fontSize: 16 }}>
                        {item.userName}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.reactiveItems}>
                  {selection ? (
                    <TouchableOpacity onPress={handleSelection}>
                      <View
                        style={selected ? styles.selected : styles.unselected}
                      ></View>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

export default CardFavorite;
