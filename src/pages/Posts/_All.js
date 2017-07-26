import React from 'react'
import { graphql } from 'react-apollo'
import { map } from 'lodash'
import { Link } from 'react-router-dom'
import { getPosts } from '../../api/posts'
import { Icon, Tooltip } from 'antd'
import { Heading, Section } from '../../components/Section'

export const AllPosts = ({data: {loading, posts}, match}) => {
  const renderPosts = (items) => (
    map(items, (item) => (
      <li key={item.id}>
        <Link to={match.url + '/' + item.id}>{item.title}</Link>
      </li>
    ))
  )

  const heading = (
    <Heading>
      <h3>Posts</h3>
      <Tooltip placement='bottom' title='Create New Post'>
        <Link className='ant-btn ant-btn-icon-only' to='/posts/new'>
          <Icon type='edit' style={{ fontSize: '16px' }} />
        </Link>
      </Tooltip>
    </Heading>
  )

  return (
    <Section id='all-posts' heading={heading} width='340px'>
      <ul className='posts'>
        {renderPosts(posts)}
      </ul>
    </Section>
  )
}

export default graphql(getPosts)(AllPosts)
