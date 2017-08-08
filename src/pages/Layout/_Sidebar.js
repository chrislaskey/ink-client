import React from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { map } from 'lodash'
import { getLabels } from '../../api/labels'
import { Link } from 'react-router-dom'
import { Icon, Layout, Menu } from 'antd'
import { updatePreferences } from '../../actions/currentUser'
import { getPreference } from '../../reducers/currentUser'

export const Sidebar = ({ data: { labels }, sidebarCollapsed, toggleSidebar }) => {
  const renderLabel = (label) => (
    <Menu.Item key={'label-' + label.id}>
      {label.name}
    </Menu.Item>
  )

  return (
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
          defaultSelectedKeys={['notes']}
          defaultOpenKeys={['notes']}
        >
          <Menu.Item key='0'>
            <Link to='/'>
              <Icon type='home' />
              <span className='nav-text'>
                Home
              </span>
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            key='notes'
            title={<Link to='/notes'><Icon type='mail' /><span className='nav-text'> Notes</span></Link>}
          >
            <Menu.Item key='new-note'>
              <Link to='/notes/new'>New Note</Link>
            </Menu.Item>
            <Menu.Item key='notes'>
              <Link to='/notes'>All Notes</Link>
            </Menu.Item>
            <Menu.ItemGroup key='labels' title='Labels'>
              {map(labels, renderLabel)}
            </Menu.ItemGroup>
          </Menu.SubMenu>
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
}

Sidebar.displayName = 'Sidebar'

const SidebarWithData = graphql(getLabels)(Sidebar)

const mapStateToProps = (state) => {
  const sidebarDefault = window.innerWidth <= 1000
  const sidebarState = getPreference(state, 'sidebarCollapsed')
  const sidebarSet = sidebarState !== undefined

  return {
    sidebarCollapsed: sidebarSet ? sidebarState : sidebarDefault
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: (sidebar) => dispatch(
    updatePreferences({ sidebarCollapsed: sidebar })
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarWithData)
