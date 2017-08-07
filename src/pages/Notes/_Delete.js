import React from 'react'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { clearCache } from '../../helpers/cache'
import { notification } from '../../helpers/notification'
import { deleteNote } from '../../api/notes'
import { Button, Popconfirm, Tooltip } from 'antd'

export const DeleteNote = ({ mutate, note }) => {
  const onClick = async () => {
    await mutate({
      variables: {
        uid: note.uid
      }
    })
    clearCache()
    notification('Successfully deleted note', 'warning')
    history.push('/notes')
  }

  return (
    <Tooltip placement='bottomRight' title='Delete Note'>
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

export default graphql(deleteNote)(DeleteNote)
