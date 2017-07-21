import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import Layout from '../pages/Layout'
import registerServiceWorker from './registerServiceWorker'

const target = document.getElementById('root')

const App = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Layout />
      </div>
    </ConnectedRouter>
  </Provider>
)

render(App, target)
registerServiceWorker()
