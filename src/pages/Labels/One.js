import React from 'react'
import { compose, graphql } from 'react-apollo'
import { getLabel, updateLabel } from '../../api/labels'
import { withVarsFromProps } from '../../helpers/graphql'
import { labelEditPath } from '../../helpers/paths'
import ButtonLink from '../../components/ButtonLink'
import DeleteLabel from './_Delete'
import Label from './_Label'
import { Heading, Section } from '../../components/Section'
import { Button } from 'antd'

export const OneLabel = ({data: {loading, label}, mutate}) => {
  if (loading) {
    return <Section heading={<Heading />} />
  }

  const onCheck = (updatedBody) => mutate({
    variables: {
      color: label.color,
      name: label.name
    }
  })

  const heading = (
    <Heading>
      <div className='label-actions'>
        <Button.Group>
          <ButtonLink icon='edit' to={labelEditPath(label)}>
            <span> Edit</span>
          </ButtonLink>
          <DeleteLabel label={label} />
        </Button.Group>
      </div>
    </Heading>
  )

  return (
    <Section padded id='one-label' heading={heading}>
      <Label label={label} onCheck={onCheck} />
    </Section>
  )
}

const OneLabelWithData = compose(
  graphql(getLabel, withVarsFromProps({id: 'match.params.id'})),
  graphql(updateLabel)
)(OneLabel)

export default OneLabelWithData
