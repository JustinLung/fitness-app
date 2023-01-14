import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
  },
  colors: {
    black: "#0E0E0E",
    blackTransparent: "rgba(14, 14, 14, .7)",
    white: "#ffffff",
    grey: "#DCDCDC",
    lightgrey: "#F0F0F0",
    orange: "#FE5E41",
    darkerWhite: "#E1D9D1"
  },
  styles: {
    global: () => ({
      body: {
        color: "#0E0E0E",
        bg: "#ffffff",
      },
    }),
  },
});
