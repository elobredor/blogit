import React, { useState } from "react";
import UserLoggedScreen from "./userLogged/UserLoggedScreen";
import UserGuestScreen from "./userGuest/UserGuestScreen";
import { Text } from "react-native";
import { useSelector } from "react-redux";

const AccountScreen = () => {
  const hasLogged = useSelector((state) => state.logged);

  if (hasLogged === null) return <Text>Cargando.....</Text>;

  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
};

export default AccountScreen;
