import "../styles/fonts";
import "../styles/prism-atom-dark.css"
import theme, { ThemeProvider } from "../styles/theme.js";

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default MyApp
