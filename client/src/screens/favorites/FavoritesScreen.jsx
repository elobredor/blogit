import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './FavoritesScreen.styles';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites, getArticles, setArticleLike2 } from '../../redux/actions';
import CardFavorite from '../../component/favorites/CardFavorite';

const FavoritesScreen = ({ route }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedUser = useSelector((state) => state.loggedUser);
  const favorites = useSelector((state) => state.favorites);
  const articles = useSelector((state) => state.articles);
  const [selection, setSelection] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {    
    dispatch(getFavorites(route.params, token));
  }, [articles]);

  useEffect(() => {
    if (token) {
      dispatch(getFavorites(route.params, token));
    }
  }, [token]);

  const handleSelection = () => {
    if (selection) {
      setSelection(false);
      setSelectedCards([]);
    } else {
      setSelection(true);
    }
  };

  const handleDislike = () => {
    console.log('DISLIKED');
    selectedCards.forEach(id => {
      fetch(`https://blogit.up.railway.app/api/posts/like/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({userId: loggedUser._id}),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Something went wrong')
        dispatch(setArticleLike2(loggedUser._id, id));
      })
      .catch((err) => console.error(err));
    })
    setSelectedCards([]);
    setSelection(false);
    dispatch(getArticles());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectionBtn} onPress={handleSelection}>
        <Text style={styles.selectionText}>
          {selection ? 'Cancelar' : 'Seleccionar'}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <CardFavorite
            item={item}
            setSelectedCards={setSelectedCards}
            selectedCards={selectedCards}
            selection={selection}
          />
        )}
      />
      {selection && (
        <TouchableOpacity onPress={handleDislike}>
          <View style={styles.dislike}>
            <Text style={styles.dislikeText}>
              Ya no me gusta {`(${selectedCards.length})`}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default FavoritesScreen;
