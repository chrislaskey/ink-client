import { ApolloClient, createNetworkInterface } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'http://ink.dev/api'
})

const apolloClient = new ApolloClient({
  networkInterface
})

export default apolloClient
