import React from 'react'
import { Route } from 'react-router-dom'

import AllPosts from './All'
import OnePost from './One'

export const Posts = ({ match }) => (
  <div>
    <Route exact path={match.url + '/:id'} component={OnePost} />
    <Route exact path={match.url} component={AllPosts} />
  </div>
)

export default Posts
