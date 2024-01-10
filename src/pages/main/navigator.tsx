import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute, ParamListBase, RouteProp } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

import { Text } from "@/components";
import Badge from "@/components/Badge";
import Icon, { MaterialCommunityIconsGlyphs } from "@/components/Icon";
import { HISTORY_SCREEN, HOME_SCREEN, HOME_TAB_NAVIGATOR } from "@/constants/screens";
import { AnyObject } from "@/types";
import tw, { clsx, colors } from "@/utils/tailwind";

import History from "./history/page";
import HomeNavigator from "./home/navigator";

export type MainBottomTabNavigationParamList = {
  [HOME_TAB_NAVIGATOR]?: AnyObject;
  [HISTORY_SCREEN]?: AnyObject;
};

const Tab = createBottomTabNavigator<MainBottomTabNavigationParamList>();

const ACTIVE_TINT_COLOR = "#8b5cf6";
const ROOT_SCREEN_NAMES = [HOME_SCREEN];

type TabOptions = {
  route: RouteProp<ParamListBase, keyof MainBottomTabNavigationParamList>;
  label: string;
  activeIcon: MaterialCommunityIconsGlyphs;
  inactiveIcon: MaterialCommunityIconsGlyphs;
  totalNotify?: number;
};

/**
 * Get options for a bottom tab.
 *
 * @param {TabOptions} options - The options for the tab.
 * @returns {BottomTabNavigationOptions} - The tab navigation options.
 */
const getTabOptions = ({
  route,
  label,
  activeIcon,
  inactiveIcon,
  totalNotify = 0,
}: TabOptions): BottomTabNavigationOptions => {
  // Get the focused route name, or an empty string if it's undefined
  const routeName = getFocusedRouteNameFromRoute(route);

  // Check if the current screen is a root screen
  const isRootScreen = !routeName || ROOT_SCREEN_NAMES.includes(routeName);

  return {
    tabBarIcon: ({ focused, color }) => (
      <View style={tw`relative`}>
        <Icon name={focused ? activeIcon : inactiveIcon} color={color} size="medium" />
        {totalNotify > 0 && (
          <View style={tw`absolute -right-2 -top-[1px]`}>
            <Badge status="error" value={totalNotify <= 99 ? totalNotify : "99+"} textStyle={tw`text-[9px]`} />
          </View>
        )}
      </View>
    ),
    tabBarLabel: ({ focused, color }) => (
      <Text
        style={[
          clsx({
            "text-sm": focused,
            "text-[13px] leading-4": !focused,
          }),
          { color },
        ]}
      >
        {label}
      </Text>
    ),

    // Optionally hide the tab bar for non-root screens
    tabBarStyle: clsx({ hidden: !isRootScreen }),
  };
};

const MainNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: tw`bg-white`,
        tabBarItemStyle: tw`pb-[2px]`,
        tabBarIconStyle: tw`-mb-1.5`,
        tabBarActiveTintColor: ACTIVE_TINT_COLOR,
        tabBarInactiveTintColor: colors.violet[400],
      }}
    >
      <Tab.Screen
        name={HOME_TAB_NAVIGATOR}
        component={HomeNavigator}
        options={({ route }) =>
          getTabOptions({
            route,
            label: "Trang chủ",
            activeIcon: "home",
            inactiveIcon: "home-outline",
          })
        }
      />
      <Tab.Screen
        name={HISTORY_SCREEN}
        component={History}
        options={({ route }) =>
          getTabOptions({
            route,
            label: "Lịch sử",
            activeIcon: "history",
            inactiveIcon: "history",
          })
        }
      />
      {/* <Tab.Screen
        name={NOTIFICATION_TAB_NAVIGATOR}
        component={NotificationNavigator}
        options={({ route }) =>
          getTabOptions({
            route,
            label: "Thông báo",
            activeIcon: "bell",
            inactiveIcon: "bell-outline",
            totalNotify: unreadNotificationCount,
          })
        }
      />
      <Tab.Screen
        name={USER_TAB_NAVIGATOR}
        component={UserNavigator}
        options={({ route }) =>
          getTabOptions({
            route,
            label: "Tôi",
            activeIcon: "account-circle",
            inactiveIcon: "account-circle-outline",
          })
        } */}
      {/* /> */}
    </Tab.Navigator>
  );
};

export default MainNavigator;
