import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Page from '../../components/Page'
import { NoteRoutes } from '../Notes'

import AllLabels from './All'
import EditLabel from './Edit'
import LabelNotes from './Notes'
import NewLabel from './New'

export const Labels = ({ match }) => (
  <Page>
    <Route path={match.url + '/:id/notes'} component={LabelNotes} />
    <Switch>
      <Route path={match.url + '/:id/notes'}>
        <NoteRoutes url={match.url + '/:id/notes'} />
      </Route>
      <Route exact path={match.url + '/new'} component={NewLabel} />
      <Route exact path={match.url + '/:id/edit'} component={EditLabel} />
      <Route exact path={match.url} component={AllLabels} />
    </Switch>
  </Page>
)

export default Labels
