import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout as LayoutComponent } from 'antd'
import DraggableBanner from '../Layout/_DraggableBanner'
import FlashMessages from '../../components/FlashMessages'

import LoginPage from './Login'
import LoginCallback from './Callback'

export const Login = () => (
  <LayoutComponent className='window-height'>
    <DraggableBanner />
    <FlashMessages />
    <Switch>
      <Route path='/login/:provider/callback' component={LoginCallback} />
      <Route component={LoginPage} />
    </Switch>
  </LayoutComponent>
)

Login.displayName = 'Login'

export default Login
