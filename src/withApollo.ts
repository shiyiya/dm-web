import { ApolloClient, InMemoryCache } from '@apollo/client'
// import { setContext } from 'apollo-link-context'
import { NextPageContext } from 'next'
import { withApollo } from 'next-apollo'

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('token')
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   }
// })

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// })

const apolloClient = (ctx?: NextPageContext) =>
  new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL as string,
    // credentials: 'include' /* 'same-origin'*/,
    headers: {
      cookie:
        (typeof window === 'undefined'
          ? ctx?.req?.headers.cookie
          : undefined) || '',
    },
    cache: new InMemoryCache(),
  })

export default withApollo(apolloClient)({ ssr: true })
