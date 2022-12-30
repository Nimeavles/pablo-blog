import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider as MUIProvider } from "@mui/material";
import { DarkTheme } from "../themes";
import "@fontsource/montserrat";
import "@fontsource/pontano-sans";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MUIProvider theme={DarkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MUIProvider>
  );
}
