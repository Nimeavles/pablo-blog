import { createTheme } from "@mui/system";

export const LightTheme = createTheme({
  palette: {
    primary: {
      light: "#FFFFFF",
      main: "#E0D7D7",
      dark: "#C0C0C0",
    },
    secondary: {
      light: "#F0AE2C",
      main: "#F9D00F",
      dark: "#FEA82F",
    },
    error: {
      main: "#a80b00",
    },
  },
});
