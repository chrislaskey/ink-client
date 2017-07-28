import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon, Layout, Menu } from 'antd'
import { updatePreferences } from '../actions/currentUser'
import { getPreference } from '../reducers/currentUser'

export const Sidebar = ({ sidebarCollapsed, toggleSidebar }) => (
  <Layout.Sider
    id='sidebar'
    className='window-height'
    collapsible
    collapsed={sidebarCollapsed}
    onCollapse={(collapsed) => toggleSidebar(collapsed)}
    width='240'
  >
    <div className='section-heading' />
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
        <Menu.Item key='posts'>
          <Link to='/posts'>
            <Icon type='mail' />
            <span className='nav-text'>
              Posts
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
