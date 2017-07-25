import React from 'react'
import { createParser } from '../helpers/markdown'

export const Markdown = ({ options, value }) => {
  const parser = createParser(options)
  const html = parser(value || '')

  return (
    <div
      className='markdown'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default Markdown
