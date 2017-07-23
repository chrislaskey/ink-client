import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AllPosts from './All'
import NewPost from './New'
import OnePost from './One'

export const Posts = ({ match }) => (
  <div>
    <Switch>
      <Route exact path={match.url + '/new'} component={NewPost} />
      <Route exact path={match.url + '/:id'} component={OnePost} />
    </Switch>
    <Route exact path={match.url} component={AllPosts} />
  </div>
)

export default Posts
