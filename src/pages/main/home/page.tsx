import { Image } from "@rneui/themed";
import React from "react";
import { Text, View } from "react-native";

import { AVATAR } from "@/assets/img";
import { Icon } from "@/components";
import { formatDate } from "@/utils/date";
import { formatCurrency } from "@/utils/formatCurrency";
import tw from "@/utils/tailwind";

const Home = () => {
  return (
    <View style={tw`flex-1 bg-violet-50 p-4`}>
      <View style={tw`flex flex-row justify-between`}>
        <View style={tw`flex flex-row gap-2`}>
          <View style={tw`flex items-center rounded-full border border-gray-400`}>
            <Image
              source={AVATAR}
              style={[tw`h-12 min-h-[48px] w-12 min-w-[48px] flex-initial rounded-full border border-gray-100`]}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={tw`text-base font-bold`}>Xin chào, </Text>
            <Text>Trầm Minh Nhựt</Text>
          </View>
        </View>
        <View>
          <Icon name="cog" />
        </View>
      </View>
      <View style={tw`mt-4 flex flex-col rounded-xl bg-violet-300 p-2 shadow-xl`}>
        <View style={tw`mb-4 flex-auto items-center`}>
          <Text style={tw`text-base font-bold`}>Tổng thu nhập</Text>
          <Text>{formatCurrency(100000000, "currency", "VND")}</Text>
        </View>

        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-base font-bold`}>Tổng thu:</Text>
          <Text style={tw`text-green-400`}>{formatCurrency(100000000, "currency", "VND")}</Text>
        </View>
        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-base font-bold`}>Tổng Chi:</Text>
          <Text style={tw`text-red-400`}>{formatCurrency(100000000, "currency", "VND")}</Text>
        </View>

        <View style={tw`flex-row items-center justify-between`}>
          <Text style={tw`text-base font-bold`}>Ngày cập nhật:</Text>
          <Text>{formatDate(new Date())}</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;
