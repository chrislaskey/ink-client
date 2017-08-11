import React from 'react'
import { compose, graphql } from 'react-apollo'
import { searchNotes } from '../../api/notes'
import { withVarsFromProps } from '../../helpers/graphql'
import { Heading, Section } from '../../components/Section'
import SearchForm from './_Form'
import NotesList from '../Notes/_List'
import { Icon } from 'antd'

export const SearchNotes = ({data: {loading, searchNotes: notes}, match}) => {
  if (loading) {
    return <Section loading width='340px' />
  }

  const heading = (
    <Heading>
      <h3>
        <Icon type='search' />
        {' '}
        Search
      </h3>
    </Heading>
  )

  return (
    <Section id='search-notes' heading={heading} width='340px'>
      <SearchForm defaultValue={match.params.search} />
      <NotesList notes={notes} path={match.url + '/notes'} />
    </Section>
  )
}

const SearchNotesWithData = compose(
  graphql(searchNotes, withVarsFromProps({search: 'match.params.search'}))
)(SearchNotes)

export default SearchNotesWithData
