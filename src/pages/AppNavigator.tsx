import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { AUTH_SCREEN, HOME_NAVIGATOR, SPLASH_SCREEN } from "@/constants/screens";
import { AnyObject } from "@/types";

import Login from "./auth/login/Login";
import Home from "./home/Home";
import Splash from "./Splash";

export type AppStackNavigationParamList = {
  [SPLASH_SCREEN]?: AnyObject;
  [AUTH_SCREEN]?: AnyObject;
  [HOME_NAVIGATOR]?: AnyObject;
};

const Stack = createStackNavigator<AppStackNavigationParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={AUTH_SCREEN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SPLASH_SCREEN} component={Splash} />
      <Stack.Screen name={AUTH_SCREEN} component={Login} />
      <Stack.Screen name={HOME_NAVIGATOR} component={Home} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
