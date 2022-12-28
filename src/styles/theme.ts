import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    useSystemColorMode: false,
  },
  colors: {
    black: "#0E0E0E",
    white: "#ffffff",
    grey: "#DCDCDC",
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
