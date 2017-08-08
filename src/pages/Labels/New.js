import React from 'react'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { createLabel } from '../../api/labels'
import { clearCache } from '../../helpers/cache'
import { notification } from '../../helpers/notification'
import { Heading, Section } from '../../components/Section'
import Form from './_Form'

export const NewLabel = ({ mutate }) => {
  const onCancel = () => history.push('/labels')
  const onSubmit = async (values) => {
    const response = await mutate({ variables: values })

    clearCache()
    notification('Successfully created new label', 'success')
    history.push('/labels/' + response.data.create_label.id)
  }

  return (
    <Section padded id='new-label' heading={<Heading />}>
      <h1>Create Label</h1>
      <Form onCancel={onCancel} onSubmit={onSubmit} />
    </Section>
  )
}

export default graphql(createLabel)(NewLabel)
