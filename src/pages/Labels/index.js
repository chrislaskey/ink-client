import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Page from '../../components/Page'

import AllLabels from './All'
import EditLabel from './Edit'
import NewLabel from './New'
import OneLabel from './One'

export const Labels = ({ match }) => (
  <Page>
    <Switch>
      <Route exact path={match.url + '/new'} component={NewLabel} />
      <Route exact path={match.url + '/:id/edit'} component={EditLabel} />
      <Route exact path={match.url + '/:id'} component={OneLabel} />
      <Route component={AllLabels} />
    </Switch>
  </Page>
)

export default Labels
