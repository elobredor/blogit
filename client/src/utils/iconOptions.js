import {
  Entypo,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export const iconOptions = {
  home: {
    default: <AntDesign color={'grey'} size={24} name='home' />,
    focused: <Entypo color='black' size={24} name='home' />,
  },
  saved: {
    default: (
      <MaterialCommunityIcons
        color={'grey'}
        size={24}
        name='bookmark-outline'
      />
    ),
    focused: <MaterialCommunityIcons color='black' size={24} name='bookmark' />,
  },
  account: {
    default: <Ionicons color={'grey'} size={24} name='person-outline' />,
    focused: <Ionicons color='black' size={24} name='person' />,
  },
};
