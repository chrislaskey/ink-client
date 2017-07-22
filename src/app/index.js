import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ConnectedRouter } from 'react-router-redux'
import apolloClient from './apolloClient'
import store, { history } from './store'
import Layout from '../pages/Layout'
import registerServiceWorker from './registerServiceWorker'

const target = document.getElementById('root')

const App = (
  <ApolloProvider store={store} client={apolloClient}>
    <ConnectedRouter history={history}>
      <Layout />
    </ConnectedRouter>
  </ApolloProvider>
)

render(App, target)
registerServiceWorker()
