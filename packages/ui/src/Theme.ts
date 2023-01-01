import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      light: "#404258",
      main: "#1f1d1d",
      dark: "#000000",
    },
    secondary: {
      light: "#F2F7A1",
      main: "#FFAC41",
      dark: "#FFD700",
    },
    error: {
      main: "#a80b00",
    },
  },
});
