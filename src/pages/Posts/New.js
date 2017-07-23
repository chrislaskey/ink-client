import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import history from '../../app/history'
import { createPost } from '../../api/posts'
import Page from '../../components/Page'
import Form from './_Form'

export const NewPost = ({loading, mutate}) => {
  const redirect = (response) => history.push('/posts/' + response.data.create_post.id)
  const onSubmit = (values) => mutate({
    variables: values
  }).then(redirect)

  return (
    <Page loading={loading}>
      <h4>
        <Link to='/posts'>&laquo; Posts</Link>
      </h4>
      <h1>Create Post</h1>
      <Form onSubmit={onSubmit} />
    </Page>
  )
}

export default graphql(createPost)(NewPost)
