import React from 'react'
import { Route } from 'react-router-dom'
import Page from '../../components/Page'

import All from './All'

export const Settings = ({ match }) => (
  <Page>
    <Route exact path={match.url} component={All} />
  </Page>
)

export default Settings
