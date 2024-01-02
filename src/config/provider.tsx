import { ThemeProvider } from "@rneui/themed";
import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaProviderProps } from "react-native-safe-area-context";


import { lightTheme } from "./themes";
import tw from "../utils/tailwind";

export default function Provider({ children }: SafeAreaProviderProps) {

  return (
    <SafeAreaProvider style={tw`flex-1`}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent />
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </SafeAreaProvider>
  );
}
