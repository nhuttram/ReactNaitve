import { createTheme } from "@rneui/themed";
import tw, { colors } from "../utils/tailwind";


export const lightTheme = createTheme({
  mode: "light",
  lightColors: {
    white: colors.white,
    black: colors.black,
    background: colors.gray[100],
    primary: colors.blue[700],
    secondary: colors.gray[700],
    error: colors.red[500],
    warning: colors.orange[500],
    success: colors.green[500],
    disabled: colors.gray[400],
    divider: colors.gray[800],
  },

  components: {
    Input: {
      containerStyle: tw`p-0`,
      labelStyle: tw`mb-2 text-gray-700`,
      inputContainerStyle: tw`rounded-md border border-gray-200 bg-white`,
      inputStyle: tw`rounded-md px-4`,
      placeholderTextColor: colors.gray[400],
      leftIconContainerStyle: tw`m-0 px-3`,
      rightIconContainerStyle: tw`m-0 px-3`,
      style: tw`text-base font-normal leading-5`,
    },
    Button: {
      titleStyle: tw`text-base font-normal`,
      buttonStyle: tw`gap-2`,
      disabledStyle: tw`bg-opacity-40`,
    },
    Dialog: {
      overlayStyle: tw`w-90 bg-white`,
    },
    DialogTitle: {
      titleStyle: tw`text-gray-700`,
    },
    Header: {
      containerStyle: tw`shadow-md`,
      backgroundColor: colors.white,
      centerComponent: {
        style: tw`text-lg font-bold text-gray-700`,
      },
      centerContainerStyle: tw`justify-center`,
      statusBarProps: {
        barStyle: "dark-content",
        backgroundColor: "transparent",
        translucent: true,
      },
    },
    Text: {
      style: tw`text-base text-gray-700`,
    },
    ButtonGroup: {
      buttonContainerStyle: tw`border-0 px-2`,
      buttonStyle: tw`rounded-sm border border-gray-200 bg-white`,
      containerStyle: tw`h-10 border-0 bg-transparent`,
      disabledTextStyle: tw`text-gray-700`,
      innerBorderStyle: tw`w-0`,
      selectedButtonStyle: tw`bg-blue-500`,
      textStyle: tw`text-base font-bold `,
    },
    CheckBox: {
      containerStyle: tw`m-0 -ml-[2px] bg-transparent p-0`,
      titleProps: {
        style: tw`ml-2 text-base font-normal text-gray-700`,
      },
      textStyle: tw`ml-2 text-base font-normal text-gray-700`,
    },
  },
});
