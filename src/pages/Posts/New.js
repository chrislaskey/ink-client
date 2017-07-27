import React from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { createFlashMessage } from '../../actions/flashMessages'
import { createPost } from '../../api/posts'
import { clearCache } from '../../helpers/cache'
import { Heading, Section } from '../../components/Section'
import Form from './_Form'

export const NewPost = ({ flashMessage, mutate }) => {
  const onCancel = () => history.push('/posts')
  const onSubmit = async (values) => {
    const response = await mutate({ variables: values })

    clearCache()
    flashMessage('Successfully created new post', 'success')
    history.push('/posts/' + response.data.create_post.id)
  }

  return (
    <Section padded id='new-post' heading={<Heading />}>
      <h1>Create Post</h1>
      <Form onCancel={onCancel} onSubmit={onSubmit} />
    </Section>
  )
}

const NewPostWithData = graphql(createPost)(NewPost)

const mapDispatchToProps = (dispatch) => ({
  flashMessage: (title, type, description) => (
    dispatch(createFlashMessage(title, type, description))
  )
})

export default connect(undefined, mapDispatchToProps)(NewPostWithData)
