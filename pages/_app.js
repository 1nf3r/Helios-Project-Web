// import '../styles/globals.css'
import "../styles/fonts";
import theme, { ThemeProvider } from "../styles/theme.js";

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default MyApp
