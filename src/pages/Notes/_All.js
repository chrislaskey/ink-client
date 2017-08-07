import React from 'react'
import { graphql } from 'react-apollo'
import { map } from 'lodash'
import { Link } from 'react-router-dom'
import { getNotes } from '../../api/posts'
import { Icon, Tooltip } from 'antd'
import { Heading, Section } from '../../components/Section'

export const AllNotes = ({data: {loading, posts}, match}) => {
  const renderNotes = (items) => (
    map(items, (item) => (
      <li key={item.uid}>
        <Link to={match.url + '/' + item.uid}>{item.title}</Link>
      </li>
    ))
  )

  const heading = (
    <Heading>
      <h3>Notes</h3>
      <Tooltip placement='bottom' title='Create New Note'>
        <Link className='ant-btn ant-btn-icon-only' to='/posts/new'>
          <Icon type='edit' style={{ fontSize: '16px' }} />
        </Link>
      </Tooltip>
    </Heading>
  )

  return (
    <Section id='all-posts' heading={heading} width='340px'>
      <ul className='posts'>
        {renderNotes(posts)}
      </ul>
    </Section>
  )
}

export default graphql(getNotes)(AllNotes)
