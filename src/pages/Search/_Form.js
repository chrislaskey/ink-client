import React from 'react'
import { Form, Input } from 'antd'

export const SearchForm = ({ defaultValue, onSearch }) => (
  <Form className='search'>
    <Input.Search
      defaultValue={defaultValue}
      onPressEnter={(event) => onSearch(event.target.value)}
      onSearch={onSearch}
      placeholder='Search'
      type='text'
    />
  </Form>
)

SearchForm.displayName = 'SearchForm'

export default SearchForm
