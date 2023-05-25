import { View, Text, Button } from "react-native";
import { styles } from "./userGuestScreen.styles";

import { useDispatch } from "react-redux";
import { logToDb } from "../../../redux/actions";

const UserGuestScreen = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Button
        onPress={() => dispatch(logToDb("abcdfg123456"))}
        title="Log in"
      />
    </View>
  );
};

export default UserGuestScreen;
