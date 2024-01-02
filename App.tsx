import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import Provider from './src/config/provider';
import Toast from 'react-native-toast-message';
import AppNavigator from './src/pages/AppNavigator';

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
