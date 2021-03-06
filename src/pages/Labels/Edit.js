import React from 'react'
import { compose, graphql } from 'react-apollo'
import history from '../../app/history'
import { withVarsFromProps } from '../../helpers/graphql'
import { notification } from '../../helpers/notification'
import { resetStore } from '../../app/graphql'
import { getLabel, updateLabel } from '../../api/labels'
import { Heading, Section } from '../../components/Section'
import Form from './_Form'

export const EditLabel = ({data: {loading, label}, mutate}) => {
  const onCancel = () => history.push('/labels')
  const onSubmit = async (values) => {
    await mutate({ variables: values })
    resetStore('api')
    notification('Successfully edited label', 'success')
    history.push('/labels')
  }

  if (loading) {
    return <Section heading={<Heading />} />
  }

  const initialValues = {
    id: label.id,
    name: label.name,
    color: label.color
  }

  return (
    <Section padded id='edit-label' heading={<Heading />}>
      <h1>Update Label</h1>
      <Form initialValues={initialValues} onCancel={onCancel} onSubmit={onSubmit} />
    </Section>
  )
}

export default compose(
  graphql(getLabel, withVarsFromProps({id: 'match.params.id'})),
  graphql(updateLabel)
)(EditLabel)
