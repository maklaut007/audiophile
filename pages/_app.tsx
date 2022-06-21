import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout/Layout'
import {ThemeProvider} from "styled-components";
import { theme, GlobalStyles } from "../styles/ThemeConfig";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    <Layout><Component {...pageProps} /></Layout>
    </ThemeProvider>
  )
}

export default MyApp
