import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { getLabels } from '../../api/labels'
import { labelEditPath, labelNewPath } from '../../helpers/paths'
import ButtonLink from '../../components/ButtonLink'
import DeleteLabel from './_Delete'
import { labelNotesPath } from '../../helpers/paths'
import { Heading, Section } from '../../components/Section'
import { Button, Table, Tooltip } from 'antd'

export const AllLabels = ({data: {loading, labels}, match}) => {
  const heading = (
    <Heading>
      <h3>Labels</h3>
      <Tooltip placement='bottom' title='Create New Label'>
        <ButtonLink icon='edit' to={labelNewPath()}>
          <span> New Label</span>
        </ButtonLink>
      </Tooltip>
    </Heading>
  )

  const noteCountColumn = (_text, label) => (
    <Link to={labelNotesPath(label)}>
      {label.note_count}
    </Link>
  )

  const colorColumn = (_text, label) => (
    <span className='label-color'>
      <span style={{ background: label.color }} />
      {label.color}
    </span>
  )

  const actionColumn = (_text, label) => (
    <Button.Group>
      <ButtonLink icon='edit' to={labelEditPath(label)} />
      <DeleteLabel label={label} />
    </Button.Group>
  )

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Notes', dataIndex: 'note_count', render: noteCountColumn },
    { title: 'Color', dataIndex: 'color', render: colorColumn },
    { title: 'Actions', dataIndex: 'actions', render: actionColumn }
  ]

  return (
    <Section padded id='all-labels' heading={heading}>
      <Table dataSource={labels} columns={columns} rowKey='id' />
    </Section>
  )
}

export default graphql(getLabels)(AllLabels)
