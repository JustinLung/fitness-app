import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
  },
  colors: {
    black: "#0E0E0E",
    white: "#ffffff",
    grey: "#DCDCDC",
    lightgrey: "#F0F0F0",
    orange: "#FE5E41"
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
