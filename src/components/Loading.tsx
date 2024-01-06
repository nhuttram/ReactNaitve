import React, { useMemo } from "react";
import { ActivityIndicator, ActivityIndicatorIOSProps } from "react-native";

export type LoadingProps = ActivityIndicatorIOSProps;

const Loading = ({ size = "large", color, ...props }: LoadingProps) => {
  const iconSize = useMemo(() => {
    switch (size) {
      case "small":
        return 20;
      case "large":
        return 36;
      default:
        return size;
    }
  }, [size]);

  return <ActivityIndicator size={iconSize} color={color} {...props} />;
};

export default Loading;
