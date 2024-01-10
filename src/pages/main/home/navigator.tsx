import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { HOME_SCREEN } from "@/constants/screens";
import { AnyObject } from "@/types";

import Home from "./page";

export type HomeStackNavigationParamList = {
  [HOME_SCREEN]?: AnyObject;
};

const Stack = createStackNavigator<HomeStackNavigationParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={HOME_SCREEN} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={HOME_SCREEN} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
