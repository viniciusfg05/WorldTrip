import { AppProps } from "next/app"
import { ChakraProvider  } from '@chakra-ui/react'
import { ChakraThemeConfig } from "../styles/ChakraThemeConfig"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={ChakraThemeConfig}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp

