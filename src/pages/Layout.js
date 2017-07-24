import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout as LayoutComponent, Menu, Icon } from 'antd'
import './Layout.css'

import About from './About/Index'
import Home from './Home/Index'
import Posts from './Posts'
import Session from './Session'

import Logout from './Session/_Logout'

const { Content, Footer, Sider } = LayoutComponent

const Layout = () => (
  <LayoutComponent>
    <Sider
      breakpoint='md'
      collapsedWidth='0'
      onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
      style={{ height: '100vh' }}
    >
      <div className='logo' style={{ height: '32px', background: '#333', borderRadius: '6px', margin: '16px' }}>
        <Link to='/'>Home</Link>
      </div>
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
        <Menu.Item key='1'>
          <Icon type='video-camera' />
          <span className='nav-text'>
            <Link to='/about-us'>About</Link>
          </span>
        </Menu.Item>
        <Menu.Item key='2'>
          <Icon type='upload' />
          <span className='nav-text'>
            <Link to='/posts'>Posts</Link>
          </span>
        </Menu.Item>
        <Menu.Item key='3'>
          <Icon type='user' />
          <span className='nav-text'>
            <Link to='/session/login'>Login</Link>
          </span>
        </Menu.Item>
        <Menu.Item key='4'>
          <Icon type='user' />
          <span className='nav-text'>
            <Logout />
          </span>
        </Menu.Item>
      </Menu>
    </Sider>
    <LayoutComponent style={{ minHeight: '100vh' }} >
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: '24px', background: '#fff' }}>
          <Route exact path='/' component={Home} />
          <Route exact path='/about-us' component={About} />
          <Route path='/posts' component={Posts} />
          <Route path='/session' component={Session} />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ink © 2017
      </Footer>
    </LayoutComponent>
  </LayoutComponent>
)

export default Layout
