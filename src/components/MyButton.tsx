import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
};

const MyButton = ({onPress, title}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container]}>
        <Text style={[styles.text]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 157,
    height: 57,
    backgroundColor: '#53E88B',
    borderRadius: 16,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
