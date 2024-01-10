import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useState } from "react";
import { View } from "react-native";

import { Button, CheckBox, Icon, Input, Text } from "@/components";
import { MAIN_NAVIGATOR } from "@/constants/screens";
import { AppStackNavigationParamList } from "@/pages/navigator";
import tw, { colors } from "@/utils/tailwind";

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackNavigationParamList>>();
  const [isCheckBox, setIsCheckBox] = useState(false);

  const handleLoginPress = useCallback(() => {
    navigation.replace(MAIN_NAVIGATOR);
  }, [navigation]);

  const handleRememberMePress = useCallback(() => {
    setIsCheckBox((pre) => !pre);
  }, []);

  return (
    <View style={tw`flex-1 border border-red-500 p-5`}>
      <Icon name="bank" size={100} color={colors.violet[500]} style={tw`mt-10 self-center`} />
      <Text style={tw`mb-4 mt-6 self-center text-lg font-bold`}>Trầm Minh Nhựt</Text>

      <View style={tw`flex flex-col gap-4 rounded-3xl bg-white/80 px-4 py-6`}>
        <Input placeholder="Tài khoản" cursorColor={colors.violet[500]} placeholderTextColor={colors.violet[500]} />

        <Input placeholder="Mật khẩu" cursorColor={colors.violet[500]} placeholderTextColor={colors.violet[500]} />

        <Icon name="swap-vertical" size={28} color={colors.violet[500]} style={tw`self-center`} />

        <Input
          placeholder="Số điện thoại"
          cursorColor={colors.violet[500]}
          placeholderTextColor={colors.violet[500]}
          keyboardType="numeric"
        />

        <CheckBox
          checked={isCheckBox}
          onPress={handleRememberMePress}
          title="Lưu thông tin đăng nhập"
          checkedColor={colors.violet[500]}
        />

        <Button title="Đăng nhập" onPress={handleLoginPress} color={colors.violet[500]} buttonStyle={tw`m-4`} />

        <View style={tw`flex-row justify-between `}>
          <View style={tw`flex-row`}>
            <Text style={tw`text-lg text-violet-500`}>Quên mật khẩu </Text>
            <Icon name="lock-reset" size={28} color={colors.violet[500]} />
          </View>

          <View style={tw`flex-row`}>
            <Text style={tw`text-lg text-violet-500`}>Đăng ký </Text>
            <Icon name="account-plus-outline" size={28} color={colors.violet[500]} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
