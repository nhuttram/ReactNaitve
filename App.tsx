import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Toast from "react-native-toast-message";

import Provider from "./src/config/provider";
import AppNavigator from "./src/pages/navigator";

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider>
        <AppNavigator />
      </Provider>
      <Toast />
    </NavigationContainer>
  );
}

export default App;
