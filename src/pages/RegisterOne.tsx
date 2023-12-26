import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {BG} from '../assets/img';
import {MyButton} from '../components';


const RegisterOne = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BG} resizeMode="cover" style={styles.bg}>
        <View style={styles.btnBack}>
          <Icon name="chevron-left" size={40} color="#000" />
        </View>
        <View style={styles.layOutText}>
          <Text style={styles.textOne}>Fill in your bio to get started</Text>

          <Text style={styles.textTwo}>
            This data will be displayed in your account profile for security
          </Text>
        </View>

        <View style={styles.formInput}>
          <TextInput style={styles.input} placeholder="First Name" />

          <TextInput style={styles.input} placeholder="Last Name" />

          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            keyboardType="numeric"
            maxLength={11}
          />
        </View>

        <View style={styles.btn}>
          <MyButton title="Next" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisterOne;

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
    fontSize: 29,
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
    marginTop: 30,
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    height: 230,
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
