import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { CssBaseline, ThemeProvider as MUIProvider } from "@mui/material";
import { DarkTheme } from "../themes";
import "@fontsource/montserrat";
import "@fontsource/pontano-sans";
import { MDXComponents } from "../components";
import { theme, ThemeProvider } from "ui";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <ThemeProvider theme={theme}>
        <MUIProvider theme={DarkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </MUIProvider>
      </ThemeProvider>
    </MDXProvider>
  );
}
