import React from 'react'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { Provider, dedupExchange, fetchExchange, createClient } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache'
import theme from '../theme'
import 'focus-visible/dist/focus-visible'

const cache = cacheExchange({
  // updates: {
  //   Mutation: {
  //     login() {},
  //   },
  // },
})

const client = createClient({
  url: 'http://localhost:4000/graphql',
  exchanges: [dedupExchange, cache, fetchExchange],
})

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          value="dark"
          options={{
            initialColorMode: 'dark',
            // useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
