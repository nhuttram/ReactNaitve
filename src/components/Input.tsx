import { Input as RNEInput, InputProps } from "@rneui/themed";
import React, { ReactElement } from "react";

import { clsx } from "@/utils/tailwind";

export type TextInputProps = Omit<InputProps, "errorMessage"> & {
  helperText?: string | false;
  error?: boolean;
};

const Input = ({ helperText, error, ...otherProps }: TextInputProps): ReactElement => {
  return (
    <RNEInput
      errorMessage={helperText ? helperText : undefined}
      errorStyle={clsx({
        hidden: !helperText,
        "text-red-500": !!error,
        "text-gray-400": !error,
      })}
      {...otherProps}
    />
  );
};

export default Input;
