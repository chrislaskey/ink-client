import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Layout as LayoutComponent, Icon, Menu, Tooltip } from 'antd'
import './Layout.css'

import Home from './Home/Index'
import Posts from './Posts'
import Session from './Session'

import Logout from './Session/_Logout'

const { Content, Footer, Sider } = LayoutComponent

const Layout = () => (
  <LayoutComponent style={{ height: '100vh' }}>
    <Sider collapsible id='sidebar' className='window-height' width='240'>
      <div className='column-heading' />
      <div className='scroll-container'>
        <Menu
          id='main-nav'
          mode='inline'
          defaultSelectedKeys={['posts']}
          defaultOpenKeys={['posts']}
			  >
          <Menu.Item key='0'>
            <Link to='/'>
              <Icon type='home' />
              <span className='nav-text'>
                Home
              </span>
            </Link>
          </Menu.Item>
          <Menu.Item key='settings'>
            <Link to='/'>
              <Icon type='setting' />
              <span className='nav-text'>
                Settings
              </span>
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            key='posts'
            title={
              <Link to='/posts'>
                <Icon type='mail' />
                <span className='nav-text'>Posts</span>
              </Link>
            }
				  >
            <Menu.ItemGroup key='g1' title='Item 1'>
              <Menu.Item key='1'>Option 1</Menu.Item>
              <Menu.Item key='2'>Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key='g2' title='Item 2'>
              <Menu.Item key='3'>Option 3</Menu.Item>
              <Menu.Item key='4'>Option 4</Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        </Menu>
      </div>
    </Sider>
    <div id='content'>
      <div id='all-posts' className='content-column window-height'>
        <div className='column-heading'>
          <h3>Posts</h3>
          <Tooltip placement='bottom' title='Create New Post'>
            <Link className='ant-btn ant-btn-icon-only' to='/posts/new'>
              <Icon type='edit' style={{ fontSize: '16px' }} />
            </Link>
          </Tooltip>
        </div>
        <div className='scroll-container'>
          <ul className='posts'>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
            <li><a href='#'>Hello</a></li>
          </ul>
        </div>
      </div>
      <div id='one-post' className='content-column window-height'>
        <div className='column-heading' />
      </div>
    </div>
  </LayoutComponent>
)

      // <Row type="flex" align="top" justify="space-between">
      //   <Column id="all-posts" span={8} className="window-height">

      //   </Column>
      //   <Column id="one-post" span={16} className="window-height">

      //   </Column>
      // </Row>

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
