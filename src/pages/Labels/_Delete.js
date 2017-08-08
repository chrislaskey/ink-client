import React from 'react'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { clearCache } from '../../helpers/cache'
import { notification } from '../../helpers/notification'
import { deleteLabel } from '../../api/labels'
import { Button, Popconfirm, Tooltip } from 'antd'

export const DeleteLabel = ({ mutate, label }) => {
  const onClick = async () => {
    await mutate({
      variables: {
        id: label.id
      }
    })
    clearCache()
    notification('Successfully deleted label', 'warning')
    history.push('/labels')
  }

  return (
    <Tooltip placement='bottomRight' title='Delete Label'>
      <Popconfirm
        title='Confirm Deletion?'
        onConfirm={onClick}
        onCancel={() => true}
        okText='Delete'
        cancelText='Cancel'
      >
        <Button icon='delete' />
      </Popconfirm>
    </Tooltip>
  )
}

export default graphql(deleteLabel)(DeleteLabel)
