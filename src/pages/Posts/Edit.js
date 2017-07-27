import React from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import history from '../../app/history'
import { createFlashMessage } from '../../actions/flashMessages'
import { clearCache } from '../../helpers/cache'
import { getPost, updatePost } from '../../api/posts'
import { Heading, Section } from '../../components/Section'
import Form from './_Form'

export const EditPost = ({data: {loading, post}, flashMessage, mutate}) => {
  const onCancel = () => history.push('/posts/' + post.id)
  const onSubmit = async (values) => {
    await mutate({ variables: values })
    clearCache()
    flashMessage('Successfully edited post', 'success')
    history.push('/posts/' + post.id)
  }

  if (loading) {
    return <Section heading={<Heading />} />
  }

  const initialValues = {
    id: parseInt(post.id, 10),
    title: post.title,
    body: post.body,
    userId: post.user.id
  }

  return (
    <Section padded id='edit-post' heading={<Heading />}>
      <h1>Update Post</h1>
      <Form initialValues={initialValues} onCancel={onCancel} onSubmit={onSubmit} />
    </Section>
  )
}

const EditPostWithData = compose(
  graphql(getPost, {
    options: (props) => ({
      variables: {
        id: props.match.params.id
      }
    })
  }),
  graphql(updatePost)
)(EditPost)

const mapDispatchToProps = (dispatch) => ({
  flashMessage: (title, type, description) => (
    dispatch(createFlashMessage(title, type, description))
  )
})

export default connect(undefined, mapDispatchToProps)(EditPostWithData)
