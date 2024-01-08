import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AUTH_SCREEN, HOME_NAVIGATOR, REGISTER_SCREEN } from "@/constants/screens";
import { AnyObject } from "@/types";
import Login from "./login/Login";
import Register from "./register/Register";

export type AuthStackNavigationParamList = {
  [AUTH_SCREEN]?: AnyObject;
  [REGISTER_SCREEN]?: AnyObject;
};

const Stack = createStackNavigator<AuthStackNavigationParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={AUTH_SCREEN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AUTH_SCREEN} component={Login} />
      <Stack.Screen name={REGISTER_SCREEN} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
