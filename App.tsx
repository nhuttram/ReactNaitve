import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import MainNavigator from './src/routes/MainNavigator';
import 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.appContainer}>
      <MainNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
