import { useContext, useState } from "react";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider as MUIProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "../themes";
import { ThemeContext, ThemeProvider } from "../context/theme";
import "@fontsource/montserrat";
import "@fontsource/pontano-sans";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useContext(ThemeContext);

  const [themePalet, setThemePalet] = useState<any>(DarkTheme);

  if (theme === "light") {
    setThemePalet(LightTheme);
  }

  return (
    <ThemeProvider>
      <MUIProvider theme={themePalet}>
        <CssBaseline />
        <Component {...pageProps} />
      </MUIProvider>
    </ThemeProvider>
  );
}
