import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {LOGO} from '../assets/img';

const Logo = () => {
  return (
    <View>
      <View>
        <Image source={LOGO} />
      </View>
      <Text style={styles.content}>FoodNinja</Text>
      <Text style={styles.text}>Deliever Favorite Food</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  content: {
    paddingTop: 5,
    color: '#53E88B',
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 54,
  },
  text: {
    paddingTop: 5,
    paddingBottom: 20,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 13,
    color: 'rgba(9, 5, 28, 1)',
  },
});
