import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Page from '../../components/Page'

import AllNotes from './All'
import EditNote from './Edit'
import NewNote from './New'
import OneNote from './One'
import UnselectedNote from './_Unselected'

export const NoteRoutes = ({ url }) => (
  <Switch>
    <Route exact path={url + '/new'} component={NewNote} />
    <Route exact path={url + '/:uid/edit'} component={EditNote} />
    <Route exact path={url + '/:uid'} component={OneNote} />
    <Route component={UnselectedNote} />
  </Switch>
)

export const Notes = ({ match }) => (
  <Page>
    <Route component={AllNotes} />
    <NoteRoutes url={match.url} />
  </Page>
)

export default Notes
