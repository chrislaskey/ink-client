import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Layout, Menu } from 'antd'

export const Sidebar = () => (
  <Layout.Sider collapsible id='sidebar' className='window-height' width='240'>
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
  </Layout.Sider>
)

export default Sidebar
