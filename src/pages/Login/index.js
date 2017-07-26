import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout as LayoutComponent } from 'antd'

import LoginPage from './Login'

export const Login = () => (
  <LayoutComponent className='window-height'>
    <Switch>
      <Route path='/' component={LoginPage} />
    </Switch>
  </LayoutComponent>
)

export default Login
