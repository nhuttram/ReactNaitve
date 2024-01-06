import { CheckBox as RNECheckBox, CheckBoxProps as RNECheckBoxProps } from "@rneui/themed";
import React from "react";

import { colors } from "@/utils/tailwind";
import Icon from "./Icon";

const DEFAULT_CHECKED_COLOR = colors.blue[700];
const DEFAULT_UNCHECKED_COLOR = colors.gray[500];

export type CheckBoxProps = Omit<RNECheckBoxProps, "children" | "checked"> & {
  checked?: boolean;
};

const CheckBox = ({
  checked = false,
  checkedColor = DEFAULT_CHECKED_COLOR,
  uncheckedColor = DEFAULT_UNCHECKED_COLOR,
  ...otherProps
}: CheckBoxProps) => {
  return (
    <RNECheckBox
      checkedIcon={<Icon name="checkbox-marked" color={checkedColor} />}
      uncheckedIcon={<Icon name="checkbox-blank-outline" color={uncheckedColor} />}
      checked={checked}
      {...otherProps}
    />
  );
};

export default CheckBox;
