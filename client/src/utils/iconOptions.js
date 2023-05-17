import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';

export const iconOptions = {
  home: {
    default: <AntDesign color={'grey'} size={24} name='home' />,
    focused: <Entypo color='black' size={24} name='home' />,
  },
  saved: {
    default: <Ionicons color={'grey'} size={24} name='notifications-outline' />,
    focused: <Ionicons color='black' size={24} name='notifications' />,
  },
  profile: {
    default: <Ionicons color={'grey'} size={24} name='person-outline' />,
    focused: <Ionicons color='black' size={24} name='person' />,
  },
};
