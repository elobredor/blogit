import { View, Text, StatusBar } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHCData());
  }, []);

  const articles = useSelector((state) => state.articles);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(!visible);
  };
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
