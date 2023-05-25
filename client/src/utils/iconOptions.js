import {
  Entypo,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

export const iconOptions = {
  home: {
    default: <Ionicons color={"grey"} size={24} name="home-outline" />,
    focused: <Ionicons color="black" size={24} name="home" />,
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
  notifications: {
    default: <Ionicons color={"grey"} size={24} name="notifications-outline" />,
    focused: <Ionicons color="black" size={24} name="notifications" />,
  },
  account: {
    default: <Ionicons color={"grey"} size={24} name="person-outline" />,
    focused: <Ionicons color="black" size={24} name="person" />,
  },
};

export const iconsCard = {
  heart: {
    empty: <AntDesign name="heart" size={20} color="red" />,
    filled: <AntDesign name="hearto" size={20} color="white" />,
  },
  saved: {
    empty: (
      <MaterialCommunityIcons color="white" size={24} name="bookmark-outline" />
    ),
    filled: <MaterialCommunityIcons color="white" size={24} name="bookmark" />,
  },
  account: {
    default: <Ionicons color={"grey"} size={24} name="person-outline" />,
    focused: <Ionicons color="white" size={24} name="person" />,
  },
  glass: {
    default: <Entypo name="magnifying-glass" size={24} color="black" />,
  },
};

export const iconsArticle = {
  account: {
    default: (
      <MaterialCommunityIcons
        color={"black"}
        size={60}
        name="account-circle-outline"
      />
    ),
    focused: (
      <MaterialCommunityIcons color={"black"} size={60} name="account-circle" />
    ),
  },
  heart: {
    empty: <Ionicons name="heart-outline" size={24} color="black" />,
    filled: <Ionicons name="heart" size={24} color="#c00" />,
  },
  comment: (
    <Fontisto name="comment" size={20} color="black" style={{ marginTop: 3 }} />
  ),
  saved: {
    default: (
      <MaterialCommunityIcons color="#333" size={24} name="bookmark-outline" />
    ),
    focused: <MaterialCommunityIcons color="#333" size={24} name="bookmark" />,
  },
  commentModal: (
    <Fontisto name="comment" size={20} color="white" style={{ marginTop: 3 }} />
  ),
  plus: <Entypo name="plus" size={24} color="white" />,
  cross: <Entypo name="cross" size={24} color="white" />,
};

export const iconsComments = {
  account: {
    default: (
      <MaterialCommunityIcons
        color={"black"}
        size={40}
        name="account-circle-outline"
      />
    ),
    focused: (
      <MaterialCommunityIcons color={"black"} size={40} name="account-circle" />
    ),
  },
  heart: {
    empty: <Ionicons name="heart-outline" size={24} color="black" />,
    filled: <Ionicons name="heart" size={24} color="#c00" />,
  },
  comment: (
    <Fontisto name="comment" size={20} color="black" style={{ marginTop: 3 }} />
  ),
  saved: {
    default: (
      <MaterialCommunityIcons color="white" size={24} name="bookmark-outline" />
    ),
    focused: <MaterialCommunityIcons color="white" size={24} name="bookmark" />,
  },
  commentModal: (
    <Fontisto name="comment" size={20} color="white" style={{ marginTop: 3 }} />
  ),
  plus: <Entypo name="plus" size={24} color="white" />,
  cross: <Entypo name="cross" size={24} color="white" />,
  send: <MaterialCommunityIcons name="send-circle" size={40} color="#f05" />,
};
