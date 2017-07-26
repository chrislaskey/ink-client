import React from 'react'
import { graphql } from 'react-apollo'
import { map } from 'lodash'
import { Link } from 'react-router-dom'
import { getPosts } from '../../api/posts'
import Page from '../../components/Page'
import { Breadcrumb, Icon, Tooltip } from 'antd'

export const AllPosts = ({data: {loading, posts}, match}) => {
  const renderPosts = (items) => (
    map(items, (item) => (
      <li key={item.id}>
        <Link to={match.url + '/' + item.id}>{item.title}</Link>
      </li>
    ))
  )

  return (
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
          {renderPosts(posts)}
        </ul>
      </div>
    </div>
  )
}

export default graphql(getPosts)(AllPosts)
