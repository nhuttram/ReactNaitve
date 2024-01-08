import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import MainNavigator from "@/routes/MainNavigator";
import { HOME_NAVIGATOR } from "@/constants/screens";
import { AnyObject } from "@/types";
import Home from "./Home";

export type HomeStackNavigationParamList = {
  [HOME_NAVIGATOR]?: AnyObject;
};

const Stack = createStackNavigator<HomeStackNavigationParamList>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={HOME_NAVIGATOR} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={HOME_NAVIGATOR} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
