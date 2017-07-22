import React from 'react'
import { graphql } from 'react-apollo'
import { map } from 'lodash'
import { getPosts } from '../../api/posts'
import Page from '../../components/Page'

export const Posts = ({data: {loading, posts}}) => {
  const renderPosts = (items) => (
    map(items, (item) => <li key={item.id}>{item.title}</li>)
  )

  return (
    <Page loading={loading}>
      <h1>Posts</h1>
      <ul>{renderPosts(posts)}</ul>
    </Page>
  )
}

export default graphql(getPosts)(Posts)
