import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LOGIN_SCREEN, MAIN_NAVIGATOR, SPLASH_SCREEN } from "../constants/screens";
import { AnyObject } from "../types";
import Login from "./auth/login/Login";
import MainNavigator from "@/routes/MainNavigator";
import Splash from "./Splash";

export type AppStackNavigationParamList = {
  [SPLASH_SCREEN]?: AnyObject;
  [LOGIN_SCREEN]?: AnyObject;
  [MAIN_NAVIGATOR]?: AnyObject;
};

const Stack = createStackNavigator<AppStackNavigationParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={LOGIN_SCREEN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SPLASH_SCREEN} component={Splash} />
      <Stack.Screen name={LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={MAIN_NAVIGATOR} component={MainNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
