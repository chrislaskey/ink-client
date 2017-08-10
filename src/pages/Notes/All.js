import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { getNotes } from '../../api/notes'
import { Heading, Section } from '../../components/Section'
import NotesList from './_List'
import { Icon, Tooltip } from 'antd'

export const AllNotes = ({data: {loading, notes}, match}) => {
  if (loading) {
    return <Section loading width='340px' />
  }

  const heading = (
    <Heading>
      <h3>All Notes</h3>
      <Tooltip placement='bottom' title='Create New Note'>
        <Link className='ant-btn ant-btn-icon-only' to='/notes/new'>
          <Icon type='edit' style={{ fontSize: '16px' }} />
        </Link>
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
