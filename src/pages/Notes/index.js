import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Page from '../../components/Page'

import AllNotes from './_All'
import EditNote from './Edit'
import NewNote from './New'
import OneNote from './One'
import UnselectedNote from './_Unselected'

export const Notes = ({ match }) => (
  <Page>
    <Route component={AllNotes} />
    <Switch>
      <Route exact path={match.url + '/new'} component={NewNote} />
      <Route exact path={match.url + '/:uid/edit'} component={EditNote} />
      <Route exact path={match.url + '/:uid'} component={OneNote} />
      <Route component={UnselectedNote} />
    </Switch>
  </Page>
)

export default Notes
