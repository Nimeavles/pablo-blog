import { AppProps } from "next/app";
import { theme, ThemeProvider } from "ui";
import "../styles/styles.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
