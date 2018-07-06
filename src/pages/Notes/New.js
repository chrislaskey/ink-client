import React from 'react'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { createNote } from '../../api/notes'
import { resetStore } from '../../app/graphql'
import { notification } from '../../helpers/notification'
import { Heading, Section } from '../../components/Section'
import Form from './_Form'

export const NewNote = ({ mutate }) => {
  const onCancel = () => history.push('/notes')
  const onSubmit = async (values) => {
    const response = await mutate({ variables: values })

    resetStore('api')
    notification('Successfully created new note', 'success')
    history.push('/notes/' + response.data.create_note.uid)
  }

  return (
    <Section padded id='new-note' heading={<Heading />}>
      <h1>Create Note</h1>
      <Form onCancel={onCancel} onSubmit={onSubmit} />
    </Section>
  )
}

export default graphql(createNote)(NewNote)
