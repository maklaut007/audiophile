import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/ThemeConfig";
import { GlobalStyle } from "../styles/globalStyles";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
