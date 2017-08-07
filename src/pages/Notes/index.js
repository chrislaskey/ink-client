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
    <Route component={AllPosts} />
    <Switch>
      <Route exact path={match.url + '/new'} component={NewPost} />
      <Route exact path={match.url + '/:uid/edit'} component={EditPost} />
      <Route exact path={match.url + '/:uid'} component={OnePost} />
      <Route component={UnselectedPost} />
    </Switch>
  </Page>
)

export default Posts
