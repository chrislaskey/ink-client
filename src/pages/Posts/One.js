import React from 'react'
import { Link } from 'react-router-dom'
import { graphql } from 'react-apollo'
import { getPost } from '../../api/posts'
import Page from '../../components/Page'

export const OnePost = ({data: {loading, post}}) => {
  if (!post) { return <Page loading /> }

  return (
    <Page loading={loading}>
      <h4>
        <Link to='/posts'>&laquo; Posts</Link>
      </h4>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </Page>
  )
}

export default graphql(getPost, {
  options: (props) => ({variables: {
    id: props.match.params.id
  }})
})(OnePost)
