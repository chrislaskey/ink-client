import React from 'react'
import { compose, graphql } from 'react-apollo'
import history from '../../app/history'
import { searchNotes } from '../../api/notes'
import { withVarsFromProps } from '../../helpers/graphql'
import { Heading, Section } from '../../components/Section'
import ButtonLink from '../../components/ButtonLink'
import SearchForm from './_Form'
import NotesList from '../Notes/_List'
import { Icon } from 'antd'

export const SearchNotes = ({data: {loading, searchNotes: notes}, match}) => {
  if (loading) {
    return <Section loading width='340px' />
  }

  const onSubmit = (data) => {
    history.push('/search/' + data.search)
  }

  const heading = (
    <Heading>
      <h3>
        <Icon type='search' style={{ fontSize: '14px' }} />
        {' '}
        <SearchForm
          initialValues={{ search: match.params.search }}
          onSubmit={onSubmit}
        />
      </h3>
      <ButtonLink icon='close' to='/search' />
    </Heading>
  )

  return (
    <Section id='search-notes' heading={heading} width='340px'>
      <NotesList notes={notes} path={match.url + '/notes'} />
    </Section>
  )
}

const SearchNotesWithData = compose(
  graphql(searchNotes, withVarsFromProps({search: 'match.params.search'}))
)(SearchNotes)

export default SearchNotesWithData
