import React from 'react'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { createLabel } from '../../api/labels'
import { resetStore } from '../../app/graphql'
import { notification } from '../../helpers/notification'
import { Heading, Section } from '../../components/Section'
import Form from './_Form'

export const NewLabel = ({ mutate }) => {
  const onCancel = () => history.push('/labels')
  const onSubmit = async (values) => {
    await mutate({ variables: values })
    resetStore('api')
    notification('Successfully created new label', 'success')
    history.push('/labels')
  }

  return (
    <Section padded id='new-label' heading={<Heading />}>
      <h1>Create Label</h1>
      <Form onCancel={onCancel} onSubmit={onSubmit} />
    </Section>
  )
}

export default graphql(createLabel)(NewLabel)
