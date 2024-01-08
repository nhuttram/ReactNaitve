import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { BG } from "@/assets/img";
import { Button, Icon } from "@/components";
import Logo from "@/components/Logo";

const Register = () => {
  const [checkShowPassword, setCheckShowPassword] = useState<boolean>(true);

  const [checkOne, setCheckOne] = useState<boolean>(false);
  const [checkTwo, setCheckTwo] = useState<boolean>(false);

  const handlerShowOnPassword = () => {
    setCheckShowPassword(true);
  };

  const handlerShowOffPassword = () => {
    setCheckShowPassword(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BG} resizeMode="cover" style={styles.bg}>
        <Logo />
        <Text style={[styles.text, { fontSize: 26, lineHeight: 60, marginBottom: 10 }]}> Sign Up For Free</Text>

        <View style={styles.formInput}>
          <View style={styles.formInputLayout}>
            <Icon style={[styles.icon, { color: "#15BE77" }]} name="account" size={25} />
            <TextInput style={styles.input} placeholder="User name" />
          </View>

          <View style={styles.formInputLayout}>
            <Icon style={[styles.icon, { color: "#15BE77" }]} name="email" size={25} />
            <TextInput style={styles.input} placeholder="Email" />
          </View>

          <View style={styles.formInputLayout}>
            <Icon style={[styles.icon, { color: "#15BE77" }]} name="lock" size={23} />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={checkShowPassword ? true : false} />
            {!checkShowPassword ? (
              <Icon onPress={handlerShowOnPassword} style={[styles.iconEeye]} name="eye-outline" size={25} />
            ) : (
              <Icon onPress={handlerShowOffPassword} style={[styles.iconEeye]} name="eye-off" size={25} />
            )}
          </View>
        </View>
        <View style={styles.LayoutCheckbox}>
          <View style={styles.checkbox}>
            {checkOne ? (
              <TouchableOpacity onPress={() => setCheckOne(false)}>
                <Icon style={[styles.checkCircle]} name="check-circle" size={25} color="#15BE77" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setCheckOne(true)}>
                <Icon style={[styles.checkCircle]} name="circle-outline" size={25} color="#15BE77" />
              </TouchableOpacity>
            )}
            <Text style={[styles.text, { fontSize: 16 }]}>Keep Me Signed In</Text>
          </View>

          <View style={styles.checkbox}>
            {checkTwo ? (
              <TouchableOpacity onPress={() => setCheckTwo(false)}>
                <Icon style={[styles.checkCircle]} name="check-circle" size={25} color="#15BE77" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setCheckTwo(true)}>
                <Icon style={[styles.checkCircle]} name="circle-outline" size={25} color="#15BE77" />
              </TouchableOpacity>
            )}
            <Text style={[styles.text, { fontSize: 16 }]}>Email Me About Special Pricing</Text>
          </View>
        </View>

        <View style={styles.btn}>
          <MyButton title="Create Account" />

          <Text style={styles.textBottom}> already have an account ?</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bg: {
    alignItems: "center",
    paddingTop: 20,
    flex: 1,
    height: "100%",
  },
  formInput: {
    justifyContent: "space-between",
    flexDirection: "column",
    width: 300,
    height: 195,
  },
  formInputLayout: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  icon: {
    position: "absolute",
    top: 12,
    left: 10,
  },
  input: {
    width: 300,
    paddingLeft: 40,
    height: 52,
    borderWidth: 1.4,
    borderRadius: 14,
    borderColor: "#9CAA9D",
  },
  iconEeye: {
    position: "absolute",
    color: "#15BE77",
    top: 12,
    right: 12,
  },
  text: {
    color: "#09051C",
    fontFamily: "BentonSans Bold",
    fontSize: 20,
    lineHeight: 45,
  },
  LayoutCheckbox: {
    marginTop: 10,
    flexDirection: "column",
    paddingRight: 45,
  },
  checkbox: {
    alignItems: "center",
    flexDirection: "row",
  },
  checkCircle: {
    paddingRight: 6,
  },
  btn: {
    flex: 0.9,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textBottom: {
    color: "#15BE77",
    marginTop: 16,
    textAlign: "center",
    fontSize: 16,
  },
});
