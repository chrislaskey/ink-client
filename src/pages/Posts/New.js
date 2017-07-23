import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { createPost } from '../../api/posts'
import Page from '../../components/Page'
import Form from './_Form'

export const NewPost = ({loading, mutate}) => {
  const onSubmit = (values) => mutate({
    variables: values
  })

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
