import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Page from '../../components/Page'
import { NoteRoutes } from '../Notes'
import SearchNotes from './Notes'

export const Labels = ({ match }) => (
  <Page>
    <Switch>
      <Route path={match.url + '/:search'} component={SearchNotes} />
      <Route path={match.url} component={SearchNotes} />
    </Switch>
    <Route path={match.url}>
      <NoteRoutes url={match.url + '/:search/notes'} />
    </Route>
  </Page>
)

export default Labels
