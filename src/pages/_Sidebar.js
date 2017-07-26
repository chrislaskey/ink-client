import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon, Layout, Menu } from 'antd'
import { updatePreferences } from '../actions/currentUser'
import { getPreference } from '../reducers/currentUser'
import Logout from './User/_Logout'

export const Sidebar = ({ sidebarCollapsed, toggleSidebar }) => (
  <Layout.Sider
    id='sidebar'
    className='window-height'
    collapsible
    collapsed={sidebarCollapsed}
    onCollapse={(collapsed) => toggleSidebar(collapsed)}
    width='240'
  >
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
          <Link to='/settings'>
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
        <Menu.Item key='logout'>
          <Logout />
        </Menu.Item>
      </Menu>
    </div>
  </Layout.Sider>
)

const mapStateToProps = (state) => ({
  sidebarCollapsed: getPreference(state, 'sidebarCollapsed') || false
})

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: (sidebar) => dispatch(
    updatePreferences({ sidebarCollapsed: sidebar })
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
