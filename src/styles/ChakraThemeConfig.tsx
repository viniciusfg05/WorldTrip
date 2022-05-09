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
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  styles: {
    global: {
      body: {
        bg: 'white.400',
      }
    }
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }
})