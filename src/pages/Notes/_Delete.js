import React from 'react'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { clearCache } from '../../helpers/cache'
import { notification } from '../../helpers/notification'
import { deleteNote } from '../../api/posts'
import { Button, Popconfirm, Tooltip } from 'antd'

export const DeleteNote = ({ mutate, post }) => {
  const onClick = async () => {
    await mutate({
      variables: {
        uid: post.uid
      }
    })
    clearCache()
    notification('Successfully deleted post', 'warning')
    history.push('/posts')
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
