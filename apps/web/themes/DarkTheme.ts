import { createTheme } from "@mui/material/styles";

export const DarkTheme = createTheme({
  palette: {
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
