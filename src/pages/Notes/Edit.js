import React from 'react'
import { compose, graphql } from 'react-apollo'
import history from '../../app/history'
import { withVarsFromProps } from '../../helpers/graphql'
import { notification } from '../../helpers/notification'
import { clearCache } from '../../helpers/cache'
import { getNote, updateNote } from '../../api/posts'
import { Heading, Section } from '../../components/Section'
import Form from './_Form'

export const EditNote = ({data: {loading, post}, mutate}) => {
  const onCancel = () => history.push('/posts/' + post.uid)
  const onSubmit = async (values) => {
    await mutate({ variables: values })
    clearCache()
    notification('Successfully edited post', 'success')
    history.push('/posts/' + post.uid)
  }

  if (loading) {
    return <Section heading={<Heading />} />
  }

  const initialValues = {
    uid: post.uid,
    title: post.title,
    body: post.body,
    userId: post.user.id
  }

  return (
    <Section padded id='edit-post' heading={<Heading />}>
      <h1>Update Note</h1>
      <Form initialValues={initialValues} onCancel={onCancel} onSubmit={onSubmit} />
    </Section>
  )
}

export default compose(
  graphql(getNote, withVarsFromProps({uid: 'match.params.uid'})),
  graphql(updateNote)
)(EditNote)
