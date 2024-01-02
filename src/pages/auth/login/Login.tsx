import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { BG } from '../../../assets/img';
import { MyButton } from '../../../components';
import Logo from '../../../components/Logo';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackActions } from '@react-navigation/native';

const Login = ({ navigation }: any) => {
  const change = () => {
    navigation.dispatch(StackActions.replace('Register'));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BG} resizeMode="cover" style={styles.bg}>
        <Logo />
        <Text
          style={[
            styles.text,
            { fontSize: 26, lineHeight: 70, marginBottom: 10 },
          ]}>
          Đăng nhập
        </Text>

        <View style={styles.formInput}>
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>
        <Text style={[styles.text, { fontSize: 15, lineHeight: 60 }]}>
          Hoặc
        </Text>

        <View style={[styles.fbOrGoogle]}>
          <View style={[styles.fb]}>
            <Icon
              name="facebook"
              size={35}
              color="#000"
              style={{ paddingRight: 2 }}
            />
            <Text style={[styles.text, { fontSize: 18 }]}> Facebook</Text>
          </View>
          <View style={[styles.google]}>
            <View style={[styles.googleIcon]}>
              <Icon name="google" size={30} color="#fff" />
            </View>
            <Text style={[styles.text, { fontSize: 18 }]}> Google</Text>
          </View>
        </View>

        <Text
          style={[
            styles.text,
            { fontSize: 18, color: '#53E88B', lineHeight: 60 },
          ]}>
          Forgot Your Password?
        </Text>

        <View style={styles.btn}>
          <MyButton title="Login" onPress={change} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bg: {
    alignItems: 'center',
    paddingTop: 20,
    flex: 1,
    height: '100%',
  },
  text: {
    color: '#09051C',
    fontFamily: 'BentonSans Bold',
    fontSize: 26,
    textAlign: 'center',
  },
  formInput: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: 300,
    height: 120,
  },
  input: {
    paddingLeft: 14,
    height: 52,
    borderWidth: 1.4,
    borderRadius: 14,
    borderColor: '#9CAA9D',
  },
  fbOrGoogle: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-between',
  },
  fb: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 145,
    height: 60,
    borderWidth: 1.4,
    borderRadius: 14,
    borderColor: '#9CAA9D',
  },
  google: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 145,
    height: 60,
    borderWidth: 1.4,
    borderRadius: 14,
    borderColor: '#9CAA9D',
  },
  googleIcon: {
    marginRight: 4,
    borderRadius: 50,
    borderWidth: 1.4,
    backgroundColor: '#000',
  },
  btn: {
    flex: 0.6,
    justifyContent: 'flex-end',
  },
});
