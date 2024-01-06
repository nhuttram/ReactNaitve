import { DialogProps as RNEDialogProps } from "@rneui/base";
import { Dialog as RNEDialog } from "@rneui/themed";
import React, { ReactElement } from "react";
import { ColorValue, StatusBar, TouchableOpacity, View } from "react-native";

import tw, { clsx, colors } from "@/utils/tailwind";
import Loading from "./Loading";
import Text from "./Text";

/** Define Dialog Type */
export type DialogType = "Info" | "Warning" | "Error";

/** Define props object */
export type DialogProps = RNEDialogProps & {
  props: {
    isVisible: boolean;
    type?: DialogType;
    header?: string | ReactElement;
    message?: string;
    labelButtonOk?: string;
    colorButtonOk?: string | ColorValue;
    labelButtonCancel?: string;
    colorButtonCancel?: string | ColorValue;
    onConfirm: () => void;
    loadingConfirm?: boolean;
    disabledConfirm?: boolean;
    onCancel?: () => void | undefined;
  };
};

/** Default props on init */
const defaultProps = {
  type: "Info",
  labelButtonOk: "Đồng ý",
  labelButtonCancel: "Hủy",
  colorButtonOk: colors.blue[500],
  colorButtonCancel: colors.red[500],
};

const Dialog = ({ props: inputProps, ...otherProps }: DialogProps): ReactElement => {
  const props = Object.assign({}, defaultProps, inputProps);

  return (
    <RNEDialog overlayStyle={tw`rounded-md`} style={tw`bg-blue-300`} isVisible={props.isVisible} {...otherProps}>
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.3)" barStyle="dark-content" translucent />

      {/* Header title */}
      <View style={tw`flex flex-row items-center justify-center`}>
        <Text style={tw`ml-2 text-center text-lg font-bold`}>{props.header}</Text>
      </View>

      {/* Body */}
      <View style={tw`mb-1 items-center justify-center`}>
        <Text style={tw`py-2 text-center font-medium`}>{props.message}</Text>
      </View>
      {otherProps.children}

      {/* Action button group */}
      <RNEDialog.Actions>
        <View style={[tw`flex w-full flex-row justify-around gap-4`, props.onCancel && clsx(tw``)]}>
          {props.onCancel && (
            <TouchableOpacity
              style={[
                tw`h-10 w-1/2 items-center justify-center rounded-lg border`,
                { borderColor: props.colorButtonCancel },
              ]}
              onPress={props.onCancel}
            >
              <Text style={[tw`font-semibold`, { color: props.colorButtonCancel }]}>{props.labelButtonCancel}</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            style={[tw`h-10 w-1/2 items-center justify-center rounded-lg border`, { borderColor: props.colorButtonOk }]}
            onPress={props.onConfirm}
            disabled={props.disabledConfirm}
          >
            {props.loadingConfirm ? (
              <Loading size="small" color={props.colorButtonOk} />
            ) : (
              <Text style={[tw`font-semibold`, { color: props.colorButtonOk }]}>{props.labelButtonOk}</Text>
            )}
          </TouchableOpacity>
        </View>
      </RNEDialog.Actions>
    </RNEDialog>
  );
};

export default Dialog;
