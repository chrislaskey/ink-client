import React from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import history from '../../app/history'
import { createFlashMessage } from '../../actions/flashMessages'
import { createPost } from '../../api/posts'
import { clearCache } from '../../helpers/cache'
import Page from '../../components/Page'
import Form from './_Form'

export const NewPost = ({ flashMessage, mutate }) => {
  const onSubmit = async (values) => {
    const response = await mutate({ variables: values })

    clearCache()
    flashMessage('Successfully created new post', 'success')
    history.push('/posts/' + response.data.create_post.id)
  }

  return (
    <Page>
      <h4>
        <Link to='/posts'>&laquo; Posts</Link>
      </h4>
      <h1>Create Post</h1>
      <Form onSubmit={onSubmit} />
    </Page>
  )
}

const NewPostWithData = graphql(createPost)(NewPost)

const mapDispatchToProps = (dispatch) => ({
  flashMessage: (text, type) => dispatch(createFlashMessage(text, type))
})

export default connect(undefined, mapDispatchToProps)(NewPostWithData)
