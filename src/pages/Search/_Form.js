import React from 'react'
import ButtonLink from '../../components/ButtonLink'
import { Form, Input } from 'antd'
import history from '../../app/history'

const onSearch = (search) => history.push('/search/' + search)

export const SearchForm = ({ defaultValue }) => (
  <Form className='search'>
    <Input.Search
      defaultValue={defaultValue}
      onPressEnter={(event) => onSearch(event.target.value)}
      onSearch={onSearch}
      placeholder='Search'
      type='text'
    />
    <ButtonLink icon='close' to='/notes' />
  </Form>
)

SearchForm.displayName = 'SearchForm'

export default SearchForm
