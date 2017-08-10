import React from 'react'
import { graphql } from 'react-apollo'
import { getNotes } from '../../api/notes'
import { Heading, Section } from '../../components/Section'
import ButtonLink from '../../components/ButtonLink'
import NotesList from './_List'
import { Tooltip } from 'antd'

export const AllNotes = ({data: {loading, notes}, match}) => {
  if (loading) {
    return <Section loading width='340px' />
  }

  const heading = (
    <Heading>
      <h3>All Notes</h3>
      <Tooltip placement='bottom' title='Create New Note'>
        <ButtonLink icon='plus' to='/notes/new' />
      </Tooltip>
    </Heading>
  )

  return (
    <Section id='all-notes' heading={heading} width='340px'>
      <NotesList notes={notes} path={match.url} />
    </Section>
  )
}

export default graphql(getNotes)(AllNotes)
