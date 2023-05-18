import { View, Text, Button } from "react-native";
import { styles } from "./userGuestScreen.styles";

import { useDispatch } from "react-redux";
import { toggleLogged } from "../../../redux/actions";

const UserGuestScreen = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Button onPress={() => dispatch(toggleLogged())} title="Log in" />
    </View>
  );
};

export default UserGuestScreen;
