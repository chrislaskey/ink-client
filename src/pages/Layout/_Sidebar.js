import React from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { map } from 'lodash'
import { getLabels } from '../../api/labels'
import { Link } from 'react-router-dom'
import { Icon, Layout, Menu } from 'antd'
import { updatePreferences } from '../../actions/currentUser'
import { activeKeys } from '../../helpers/nav'
import { labelNotesPath } from '../../helpers/paths'
import { getPreference } from '../../reducers/currentUser'
import StatusDot from '../../components/StatusDot'

export const Sidebar = ({ data: { labels }, location, sidebarCollapsed, toggleSidebar }) => {
  const renderNoteLabel = (label) => (
    <Menu.Item key={label.id}>
      <Link to={labelNotesPath(label)}>
        <StatusDot color={label.color} />
        {label.name}
        <span className='label-note-count'> {label.note_count}</span>
      </Link>
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
          openKeys={activeKeys(location.pathname)}
          selectedKeys={activeKeys(location.pathname)}
        >
          <Menu.Item key='home'>
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
            <Menu.Item key='all-notes'>
              <Link to='/notes'>All Notes</Link>
            </Menu.Item>
            { map(labels, renderNoteLabel) }
          </Menu.SubMenu>
          <Menu.Item key='labels'>
            <Link to='/labels'>
              <Icon type='tags-o' />
              <span className='nav-text'>
                Labels
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
}

Sidebar.displayName = 'Sidebar'

const SidebarWithData = compose(
  graphql(getLabels, { options: { fetchPolicy: 'cache-and-network' } })
)(Sidebar)

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
