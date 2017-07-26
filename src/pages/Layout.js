import React from 'react'
import { Route } from 'react-router-dom'
import { Layout as LayoutComponent } from 'antd'
import Sidebar from './_Sidebar'
import './Layout.css'

import Home from './Home/Index'
import Posts from './Posts'
import Settings from './Settings'

const Layout = () => (
  <LayoutComponent className='ant-layout-has-sider window-height'>
    <Sidebar />
    <Route exact path='/' component={Home} />
    <Route path='/posts' component={Posts} />
    <Route path='/settings' component={Settings} />
  </LayoutComponent>
)

export default Layout
