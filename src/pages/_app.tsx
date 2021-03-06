import { AppProps } from "next/app"
import { ChakraProvider  } from '@chakra-ui/react'
import { ChakraThemeConfig } from "../styles/ChakraThemeConfig"
import { ReactQueryDevtools } from 'react-query/devtools'
import '../styles/global.css'
import { queryClient } from "../services/queryClient"
import { QueryClientProvider } from "react-query"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={ChakraThemeConfig}>
        <Component {...pageProps} />
      </ChakraProvider>

      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default MyApp

