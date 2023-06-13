import React from 'react';
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native';

const OnboardingItem = ({item}: any) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
      <View style={[styles.content]}>
        <Text style={[styles.title]}> {item.title} </Text>
        <Text style={[styles.description]}> {item.description}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0.7,
    justifyContent: 'center',
  },
  content: {
    flex: 0.3,
  },
  title: {
    color: '#09051C',
    fontSize: 28,
    lineHeight: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    marginTop: 10,
    lineHeight: 28,
    textAlign: 'center',
  },
});
