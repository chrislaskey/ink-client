import React from 'react'
import { Route } from 'react-router-dom'

import Login from './Login'

export const Session = ({ match }) => (
  <div>
    <Route exact path={match.url + '/login'} component={Login} />
  </div>
)

export default Session
