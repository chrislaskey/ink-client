import React from 'react'
import { compose, graphql } from 'react-apollo'
import { getLabel } from '../../api/labels'
import { withVarsFromProps } from '../../helpers/graphql'
import { Heading, Section } from '../../components/Section'
import NotesList from '../Notes/_List'

export const LabelNotes = ({data: {label, loading}, match}) => {
  if (loading) {
    return <Section loading width='340px' />
  }

  const heading = (
    <Heading>
      <h3>{label.name}</h3>
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
