import React from 'react'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { createNote } from '../../api/posts'
import { clearCache } from '../../helpers/cache'
import { notification } from '../../helpers/notification'
import { Heading, Section } from '../../components/Section'
import Form from './_Form'

export const NewNote = ({ mutate }) => {
  const onCancel = () => history.push('/posts')
  const onSubmit = async (values) => {
    const response = await mutate({ variables: values })

    clearCache()
    notification('Successfully created new post', 'success')
    history.push('/posts/' + response.data.create_post.uid)
  }

  return (
    <Section padded id='new-post' heading={<Heading />}>
      <h1>Create Note</h1>
      <Form onCancel={onCancel} onSubmit={onSubmit} />
    </Section>
  )
}

export default graphql(createNote)(NewNote)
