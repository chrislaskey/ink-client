import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Page from '../../components/Page'

import Post from './Post'

export const Public = ({ match }) => (
  <Page>
    <Switch>
      <Route exact path={match.url + '/:uid/:secret'} component={Post} />
    </Switch>
  </Page>
)

Public.displayName = 'Public'

export default Public
