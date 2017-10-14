import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ApolloClient from '../../components/ApolloClient'
import Page from '../../components/Page'

import Note from './Note'

export const Public = ({ match }) => (
  <Page>
    <ApolloClient client='api'>
      <Switch>
        <Route exact path={match.url + '/:uid/:secret'} component={Note} />
      </Switch>
    </ApolloClient>
  </Page>
)

Public.displayName = 'Public'

export default Public
