import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { BG, CAMERA, GALLERY } from '../../../assets/img';
import { Icon, MyButton } from '../../../components';

import { TouchableOpacity } from 'react-native-gesture-handler';

const RegisterThree = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BG} resizeMode="cover" style={styles.bg}>
        <View style={styles.btnBack}>
          <Icon name="chevron-left" size={40} color="#000" />
        </View>
        <View style={styles.layOutText}>
          <Text style={styles.textOne}>Upload Your Photo Profile</Text>

          <Text style={styles.textTwo}>
            This data will be displayed in your account profile for security
          </Text>
        </View>

        <View style={styles.formInput}>
          <TouchableOpacity style={styles.btnLayOut}>
            <Image source={GALLERY} />
            <Text style={{fontSize: 20, color: '#000', lineHeight: 30}}>
              From Gallery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLayOut}>
            <Image source={CAMERA} />
            <Text style={{fontSize: 20, color: '#000', lineHeight: 40}}>
              Take Photo
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btn}>
          <MyButton title="Next" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisterThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bg: {
    paddingHorizontal: 20,
    paddingTop: 20,
    flex: 1,
    height: '100%',
  },
  btnBack: {
    width: 45,
    height: 45,
    borderRadius: 18,
    backgroundColor: '#53E88B',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  layOutText: {
    marginTop: 20,
  },
  textOne: {
    fontSize: 32,
    fontWeight: '600',
    color: '#09051C',
  },
  textTwo: {
    marginTop: 10,
    lineHeight: 28,
    fontSize: 18,
    fontWeight: '300',
    color: '#000000',
  },
  formInput: {
    marginTop: 40,
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    height: 300,
  },
  btnLayOut: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 130,
    borderRadius: 22,
    elevation: 3,
  },
  icon: {
    position: 'absolute',
    top: 12,
    left: 10,
  },
  input: {
    fontSize: 18,
    paddingLeft: 20,
    height: 60,
    borderWidth: 1.4,
    borderRadius: 14,
    borderColor: '#9CAA9D',
  },
  btn: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
