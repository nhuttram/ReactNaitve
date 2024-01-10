import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { AUTH_SCREEN, MAIN_NAVIGATOR, SPLASH_SCREEN } from "@/constants/screens";
import { AnyObject } from "@/types";

import Login from "./auth/login/Login";
import MainNavigator from "./main/navigator";
import Splash from "./Splash";

export type AppStackNavigationParamList = {
  [SPLASH_SCREEN]?: AnyObject;
  [AUTH_SCREEN]?: AnyObject;
  [MAIN_NAVIGATOR]?: AnyObject;
};

const Stack = createStackNavigator<AppStackNavigationParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={AUTH_SCREEN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SPLASH_SCREEN} component={Splash} />
      <Stack.Screen name={AUTH_SCREEN} component={Login} />
      <Stack.Screen name={MAIN_NAVIGATOR} component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
