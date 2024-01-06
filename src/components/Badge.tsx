import { Badge as RNEBadge, BadgeProps as RNEBadgeProps } from "@rneui/themed";
import React from "react";

export type BadgeProps = RNEBadgeProps;

const Badge = ({ ...props }: BadgeProps) => {
  return <RNEBadge {...props} />;
};

export default Badge;
