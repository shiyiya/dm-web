import React from 'react'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { Provider, dedupExchange, fetchExchange, createClient } from 'urql'
import { cacheExchange, QueryInput, Cache } from '@urql/exchange-graphcache'
import theme from '../theme'
import 'focus-visible/dist/focus-visible'
import {
  LoginMutation,
  MeDocument,
  RegisterMutation,
} from '../generated/graphql'

function urqlCache<R, Q>(
  cache: Cache,
  qi: QueryInput,
  res: any,
  fn: (r: R, q: Q) => Q
) {
  return cache.updateQuery(qi, (data) => fn(res, data as any) as any)
}

const cache = cacheExchange({
  updates: {
    Mutation: {
      login: (_result, _args, cache, _info) => {
        urqlCache<LoginMutation, any>(
          cache,
          { query: MeDocument },
          _result,
          (r, q) => {
            if (r.login.error) return q
            else return { me: r.login.user }
          }
        )
      },
      register: (_result, _args, cache, _info) => {
        urqlCache<RegisterMutation, any>(
          cache,
          { query: MeDocument },
          _result,
          (r, q) => {
            if (r.register.errors) return q
            else return { me: r.register.user }
          }
        )
      },
    },
  },
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
