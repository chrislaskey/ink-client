import React from 'react'
import { compose, graphql } from 'react-apollo'
import history from '../../app/history'
import { withVarsFromProps } from '../../helpers/graphql'
import { notification } from '../../helpers/notification'
import { clearCache } from '../../helpers/cache'
import { getLabel, updateLabel } from '../../api/labels'
import { Heading, Section } from '../../components/Section'
import Form from './_Form'

export const EditLabel = ({data: {loading, label}, mutate}) => {
  const onCancel = () => history.push('/labels/' + label.id)
  const onSubmit = async (values) => {
    await mutate({ variables: values })
    clearCache()
    notification('Successfully edited label', 'success')
    history.push('/labels/' + label.id)
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
