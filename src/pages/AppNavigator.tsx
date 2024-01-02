import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { SPLASH_SCREEN } from "../constants/screens";
import { AnyObject } from "../types";
import Splash from "./Splash";

export type AppStackNavigationParamList = {
  [SPLASH_SCREEN]?: AnyObject;
};

const Stack = createStackNavigator<AppStackNavigationParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={SPLASH_SCREEN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={SPLASH_SCREEN} component={Splash} />
      {/* <Stack.Screen name={LOGIN_SCREEN} component={Login} />
      <Stack.Screen name={MAIN_NAVIGATOR} component={MainNavigator} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
