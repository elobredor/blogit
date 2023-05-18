import {
  Entypo,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const iconOptions = {
  home: {
    default: <AntDesign color={"grey"} size={24} name="home" />,
    focused: <Entypo color="black" size={24} name="home" />,
  },
  saved: {
    default: (
      <MaterialCommunityIcons
        color={"grey"}
        size={24}
        name="bookmark-outline"
      />
    ),
    focused: <MaterialCommunityIcons color="black" size={24} name="bookmark" />,
  },
  account: {
    default: <Ionicons color={"grey"} size={24} name="person-outline" />,
    focused: <Ionicons color="black" size={24} name="person" />,
  },
};

export const iconsCard = {
  heart: {
    empty: <AntDesign name="heart" size={24} color="red" />,
    filled: <AntDesign name="hearto" size={24} color="white" />,
  },
  saved: {
    empty: (
      <MaterialCommunityIcons color="white" size={30} name="bookmark-outline" />
    ),
    filled: <MaterialCommunityIcons color="white" size={30} name="bookmark" />,
  },
  account: {
    default: <Ionicons color={"grey"} size={24} name="person-outline" />,
    focused: <Ionicons color="white" size={24} name="person" />,
  },
  glass: {
    default: <Entypo name="magnifying-glass" size={24} color="black" />,
  },
};
