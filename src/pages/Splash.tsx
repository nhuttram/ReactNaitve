import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import Logo from '../components/Logo';
import { Icon } from '../components';

const Splash = ({ navigation }: any) => {
  const [loading, setLoading] = useState<number>(0.1);

  useEffect(() => {
    setTimeout(() => setLoading(loading + 0.2), 1000);
    if (loading >= 1) {
      // navigation.navigate('Login');
    }
  });

  return (
    <View style={[styles.container]}>
      <View style={styles.bg}>
        <Icon name="wallet-plus-outline" size={60} color="#fff" />
          <Progress.Bar
            progress={loading}
            width={200}
            style={[styles.progress]}
            borderColor={'#000'}
            color={'#fff'}
          />
        <Text style={styles.text}>
          Ví tiền Trầm Minh Nhựt
        </Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8E6BEE',
  },
  bg: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  progress: {
    marginTop: 10,
    marginBottom: 10
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    color: '#FFFFFF',
  },
});
