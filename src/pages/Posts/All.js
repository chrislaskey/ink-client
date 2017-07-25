import React from 'react'
import { graphql } from 'react-apollo'
import { map } from 'lodash'
import { Link } from 'react-router-dom'
import { getPosts } from '../../api/posts'
import Page from '../../components/Page'
import { Breadcrumb, Icon } from 'antd'

export const AllPosts = ({data: {loading, posts}, match}) => {
  const renderPosts = (items) => (
    map(items, (item) => (
      <li key={item.id}>
        <Link to={match.url + '/' + item.id}>{item.title}</Link>
      </li>
    ))
  )

  return (
    <Page loading={loading}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to='/home'>
            <Icon type='home' />
            {' '}
            Home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          Posts
        </Breadcrumb.Item>
      </Breadcrumb>
      <h1>Posts</h1>
      <p>
        <Link to='/posts/new'>
          <Icon type='plus-square-o' />
          {' '}
          New Post
        </Link>
      </p>
      <ul>{renderPosts(posts)}</ul>
    </Page>
  )
}

export default graphql(getPosts)(AllPosts)
