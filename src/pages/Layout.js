import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { isLoggedIn } from '../reducers/currentUser'
import { Layout as LayoutComponent } from 'antd'
import FlashMessages from '../components/FlashMessages'
import Sidebar from './Layout/_Sidebar'
import DraggableBanner from './Layout/_DraggableBanner'
import './Layout.css'

import Home from './Home/Index'
import Login from './Login'
import Notes from './Notes'
import Public from './Public'
import Settings from './Settings'

export const Layout = ({ loggedIn }) => {
  if (!loggedIn) {
    return (
      <Switch>
        <Route path='/public' component={Public} />
        <Route component={Login} />
      </Switch>
    )
  }

  return (
    <LayoutComponent className='ant-layout-has-sider window-height theme-dark'>
      <DraggableBanner />
      <FlashMessages />
      <Switch>
        <Route path='/public' component={null} />
        <Route component={Sidebar} />
      </Switch>
      <Route exact path='/' component={Home} />
      <Route path='/posts' component={Notes} />
      <Route path='/public' component={Public} />
      <Route path='/settings' component={Settings} />
    </LayoutComponent>
  )
}

Layout.displayName = 'Layout'

const mapStateToProps = (state) => ({
  loggedIn: isLoggedIn(state)
})

export default withRouter(connect(mapStateToProps)(Layout))
