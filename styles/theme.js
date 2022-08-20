import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
            50: '#f7fafc',
            500: '#1f1d1d',
            900: '#171923'
        },
    },
    fonts: {
        heading: "Syne",
        body: "Comfortaa"
    },
    sizes: {
        container: {
          "2xl": "1440px",
        }
    },
})

export { ChakraProvider as ThemeProvider };
export default theme;