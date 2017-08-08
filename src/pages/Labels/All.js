import React from 'react'
import { graphql } from 'react-apollo'
import { map } from 'lodash'
import { Link } from 'react-router-dom'
import { getLabels } from '../../api/labels'
import { labelNewPath } from '../../helpers/paths'
import ButtonLink from '../../components/ButtonLink'
import { Heading, Section } from '../../components/Section'

export const AllLabels = ({data: {loading, labels}, match}) => {
  const renderLabels = (items) => (
    map(items, (item) => (
      <li key={item.id}>
        <Link to={match.url + '/' + item.id}>{item.name}</Link>
      </li>
    ))
  )

  const heading = (
    <Heading>
      <h3>Labels</h3>
    </Heading>
  )

  return (
    <Section padded id='all-labels' heading={heading}>
      <ButtonLink icon='edit' to={labelNewPath()}>
        <span> New Label</span>
      </ButtonLink>
      <ul className='labels'>
        {renderLabels(labels)}
      </ul>
    </Section>
  )
}

export default graphql(getLabels)(AllLabels)
