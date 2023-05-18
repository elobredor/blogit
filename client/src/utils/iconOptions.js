import {
  Entypo,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

export const iconOptions = {
  home: {
    default: <Ionicons color={'grey'} size={24} name='home-outline' />,
    focused: <Ionicons color='black' size={24} name='home' />,
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
  notifications: {
    default: <Ionicons color={'grey'} size={24} name='notifications-outline' />,
    focused: <Ionicons color='black' size={24} name='notifications' />,
  },
  // account: {
  //   default: <Ionicons color={'grey'} size={24} name='person-outline' />,
  //   focused: <Ionicons color='black' size={24} name='person' />,
  // },
};
