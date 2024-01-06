import React, { useEffect, useState } from "react";
import * as Progress from "react-native-progress";
import tw, { colors } from "../utils/tailwind";
import { Icon, Text } from "@/components";
import { Animated, View } from "react-native";

const Splash = () => {
  const [loading, setLoading] = useState<number>(0.1);

  useEffect(() => {
    if (loading < 1) {
      const interval = setInterval(() => {
        setLoading((prev) => prev + 0.2);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <View style={tw`flex-1 justify-center bg-purple-500`}>
      <Icon name="wallet-plus-outline" size={60} color={colors.white} style={tw`self-center`} />

      <View style={tw`mb-5 mt-5 self-center`}>
        <Progress.Bar progress={loading} width={200} borderColor={colors.black} color={colors.white} />
        {/* //TODO  
         style={[{ paddingLeft: `${10 + loading * 50}%` }]}
         */}
        <Animated.View>
          <Icon name="cash-multiple" size={28} color={colors.white} />
        </Animated.View>
      </View>
      <Text style={tw`self-center text-sm text-white`}>Ví tiền Trầm Minh Nhựt</Text>
    </View>
  );
};

export default Splash;
