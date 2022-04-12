import { extendTheme } from "@chakra-ui/react";


export const ChakraThemeConfig = extendTheme({
  colors: {
    yellow: {
      "50": "#ffb9087f",
      "500": "#FFBA08",
    },
    gray: {
      "600": "#47585B",
      "400": "#999999",
      "50": "#99999978"
    },
    white: {
      "400": "#F5F8FA",
      "600": "#DADADA"
    }
  },
  fonts: {
    body: 'Poppins',
    Heading: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'white',
      }
    }
  }
})