import React, {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import * as Progress from 'react-native-progress';
import {BG} from '../assets/img/';
import Logo from '../components/Logo';

const Splash = ({navigation}: any) => {
  const [loading, setLoading] = useState<number>(0.1);

  useEffect(() => {
    setTimeout(() => setLoading(loading + 0.2), 1000);
    if (loading >= 1) {
      navigation.navigate('Login');
    }
  });

  return (
    <View style={[styles.container]}>
      <ImageBackground source={BG} resizeMode="cover" style={styles.bg}>
        <Logo />
        <View>
          <Progress.Bar
            progress={loading}
            width={200}
            style={[styles.progress]}
            borderColor={'#15BE77'}
            color={'#53E88B'}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bg: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  progress: {
    marginTop: 10,
  },
});
