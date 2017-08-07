import React from 'react'
import { compose, graphql } from 'react-apollo'
import history from '../../app/history'
import { withVarsFromProps } from '../../helpers/graphql'
import { notification } from '../../helpers/notification'
import { clearCache } from '../../helpers/cache'
import { getNote, updateNote } from '../../api/notes'
import { Heading, Section } from '../../components/Section'
import Form from './_Form'

export const EditNote = ({data: {loading, note}, mutate}) => {
  const onCancel = () => history.push('/notes/' + note.uid)
  const onSubmit = async (values) => {
    await mutate({ variables: values })
    clearCache()
    notification('Successfully edited note', 'success')
    history.push('/notes/' + note.uid)
  }

  if (loading) {
    return <Section heading={<Heading />} />
  }

  const initialValues = {
    uid: note.uid,
    title: note.title,
    body: note.body,
    userId: note.user.id
  }

  return (
    <Section padded id='edit-note' heading={<Heading />}>
      <h1>Update Note</h1>
      <Form initialValues={initialValues} onCancel={onCancel} onSubmit={onSubmit} />
    </Section>
  )
}

export default compose(
  graphql(getNote, withVarsFromProps({uid: 'match.params.uid'})),
  graphql(updateNote)
)(EditNote)
