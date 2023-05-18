import { View, Text, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadHCData } from '../../redux/actions';
import { useNavigation } from '@react-navigation/native';

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
