import { Button as RNEButton, ButtonProps as RNEButtonProps } from "@rneui/themed";
import React, { ReactElement } from "react";

const Button = ({ disabled, loading, ...otherProps }: RNEButtonProps): ReactElement => {
  return <RNEButton disabled={loading || disabled} loading={loading} {...otherProps} />;
};

export default Button;
