import React from 'react'
import { compose, graphql } from 'react-apollo'
import { getPublicNote } from '../../api/notes'
import { withVarsFromProps } from '../../helpers/graphql'
import Note from '../Notes/_Note'
import { Heading, Section } from '../../components/Section'

export const PublicNote = ({data: {loading, public_note: note}}) => {
  if (loading) {
    return <Section heading={<Heading />} />
  }

  const heading = (
    <Heading>
      <div />
      <div className='note-actions' />
    </Heading>
  )

  return (
    <Section padded id='public-note' heading={heading}>
      <Note note={note} />
    </Section>
  )
}

PublicNote.displayName = 'PublicNote'

const PublicNoteWithData = compose(
  graphql(getPublicNote, withVarsFromProps({
    secret: 'match.params.secret',
    uid: 'match.params.uid'
  }))
)(PublicNote)

export default PublicNoteWithData
