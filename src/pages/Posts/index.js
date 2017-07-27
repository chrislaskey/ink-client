import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Page from '../../components/Page'

import AllPosts from './_All'
import EditPost from './Edit'
import NewPost from './New'
import OnePost from './One'
import UnselectedPost from './_Unselected'

export const Posts = ({ match }) => (
  <Page>
    <Route path={match.url} component={AllPosts} />
    <Switch>
      <Route exact path={match.url + '/new'} component={NewPost} />
      <Route exact path={match.url + '/:id/edit'} component={EditPost} />
      <Route exact path={match.url + '/:id'} component={OnePost} />
      <Route path={match.url} component={UnselectedPost} />
    </Switch>
  </Page>
)

export default Posts
