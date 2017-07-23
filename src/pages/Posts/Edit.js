import React from 'react'
import { compose, graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { getPost, updatePost } from '../../api/posts'
import Page from '../../components/Page'
import Form from './_Form'

export const EditPost = ({data: {loading, post}, mutate}) => {
  const onSubmit = (values) => mutate({
    variables: values
  })

  if (!post) { return <Page loading /> }

  const initialValues = {
    id: parseInt(post.id, 10),
    title: post.title,
    body: post.body,
    userId: post.user.id
  }

  return (
    <Page loading={loading}>
      <h4>
        <Link to='/posts'>&laquo; Posts</Link>
      </h4>
      <h1>Update Post</h1>
      <Form initialValues={initialValues} onSubmit={onSubmit} />
    </Page>
  )
}

export default compose(
  graphql(getPost, {
    options: (props) => ({
      variables: {
        id: props.match.params.id
      }
    })
  }),
  graphql(updatePost)
)(EditPost)
