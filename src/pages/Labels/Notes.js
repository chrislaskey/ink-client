import React from 'react'
import { compose, graphql } from 'react-apollo'
import { getLabel } from '../../api/labels'
import { withVarsFromProps } from '../../helpers/graphql'
import { Heading, Section } from '../../components/Section'
import ButtonLink from '../../components/ButtonLink'
import NotesList from '../Notes/_List'
import { Icon } from 'antd'

export const LabelNotes = ({data: {label, loading}, match}) => {
  if (loading) {
    return <Section loading width='340px' />
  }

  const heading = (
    <Heading>
      <h3>
        <Icon type='tag-o' style={{ fontSize: '14px' }} />
        {' '}
        {label.name}
      </h3>
      <ButtonLink
        icon='edit'
        to={'/labels/' + label.id + '/edit'}
      />
    </Heading>
  )

  return (
    <Section id='label-notes' heading={heading} width='340px'>
      <NotesList notes={label.notes} path={match.url} />
    </Section>
  )
}

const LabelNotesWithData = compose(
  graphql(getLabel, withVarsFromProps({id: 'match.params.id'}))
)(LabelNotes)

export default LabelNotesWithData
