import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout as LayoutComponent, Avatar, Icon, Menu, Tooltip } from 'antd'
import Sidebar from './_Sidebar'
import './Layout.css'

import Home from './Home/Index'
import Posts from './Posts'
import Session from './Session'

import Logout from './Session/_Logout'

const { Content, Footer } = LayoutComponent

const Layout = () => (
  <LayoutComponent className='ant-layout-has-sider window-height'>
    <Sidebar />
    <Route exact path='/' component={Home} />
    <Route path='/posts' component={Posts} />
    <Route path='/session' component={Session} />
  </LayoutComponent>
)

// const Layout = () => (
//   <LayoutComponent>
//     <Sider
//       breakpoint='md'
//       collapsedWidth='0'
//       onCollapse={(collapsed, type) => { console.log(collapsed, type) }}
//       style={{ height: '100vh' }}
//     >
//       <div className='logo' style={{ height: '32px', background: '#333', borderRadius: '6px', margin: '16px' }}>
//         <Link to='/' />
//       </div>
//       <Menu id='main-nav' theme='dark' mode='inline' defaultSelectedKeys={['1']}>
//         <Menu.Item key='1'>
//           <Link to='/'>
//             <Icon type='home' />
//             <span className='nav-text'>
//               Home
//             </span>
//           </Link>
//         </Menu.Item>
//         <Menu.Item key='2'>
//           <Link to='/posts'>
//             <Icon type='inbox' />
//             <span className='nav-text'>
//               Posts
//             </span>
//           </Link>
//         </Menu.Item>
//         <Menu.Item key='3'>
//           <Link to='/session/login'>
//             <Icon type='user' />
//             <span className='nav-text'>
//               Login
//             </span>
//           </Link>
//         </Menu.Item>
//         <Menu.Item key='4'>
//           <Logout />
//         </Menu.Item>
//       </Menu>
//     </Sider>
//     <LayoutComponent style={{ minHeight: '100vh' }} >
//       <Content>
//         <div style={{ padding: '24px', background: '#fff' }}>
//           <Route exact path='/' component={Home} />
//           <Route path='/posts' component={Posts} />
//           <Route path='/session' component={Session} />
//         </div>
//       </Content>
//       <Footer style={{ textAlign: 'center' }}>
//         Ink © 2017
//       </Footer>
//     </LayoutComponent>
//   </LayoutComponent>
// )

export default Layout
