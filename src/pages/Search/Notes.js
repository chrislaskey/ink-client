import React from 'react'
import { compose, graphql } from 'react-apollo'
import history from '../../app/history'
import { searchNotes } from '../../api/notes'
import { withVarsFromProps } from '../../helpers/graphql'
import { Heading, Section } from '../../components/Section'
import ButtonLink from '../../components/ButtonLink'
import SearchForm from './_Form'
import NotesList from '../Notes/_List'

export const SearchNotes = ({data: {loading, searchNotes: notes}, match}) => {
  if (loading) {
    return <Section loading width='340px' />
  }

  const onSearch = (search) => history.push('/search/' + search)

  const heading = (
    <Heading>
      <h3>
        <SearchForm
          defaultValue={match.params.search}
          onSearch={onSearch}
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
