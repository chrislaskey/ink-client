import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { getPost } from '../../api/posts'
import Page from '../../components/Page'
import DeletePost from './_Delete'

export const OnePost = ({data: {loading, post}}) => {
  if (!post) { return <Page loading /> }

  return (
    <Page loading={loading}>
      <h4>
        <Link to='/posts'>&laquo; Posts</Link>
      </h4>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
      <p>
        <Link to={'/posts/' + post.id + '/edit'}>Edit Post</Link>
      </p>
      <p>
        <DeletePost post={post} />
      </p>
    </Page>
  )
}

export default graphql(getPost, {
  options: (props) => ({
    variables: {
      id: props.match.params.id
    }
  })
})(OnePost)
