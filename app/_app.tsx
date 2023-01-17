import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../src/components/Layout'
import { theme } from '../src/styles/theme'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
