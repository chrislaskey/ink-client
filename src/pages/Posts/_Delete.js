import React from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { createFlashMessage } from '../../actions/flashMessages'
import { clearCache } from '../../helpers/cache'
import { deletePost } from '../../api/posts'
import { Button, Popconfirm, Tooltip } from 'antd'

export const DeletePost = ({ flashMessage, mutate, post }) => {
  const onClick = async () => {
    await mutate({
      variables: {
        uid: post.uid
      }
    })
    clearCache()
    flashMessage('Successfully deleted post', 'warning')
    history.push('/posts')
  }

  return (
    <Tooltip placement='bottomRight' title='Delete Post'>
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

const DeletePostWithData = graphql(deletePost)(DeletePost)

const mapDispatchToProps = (dispatch) => ({
  flashMessage: (title, type, description) => (
    dispatch(createFlashMessage(title, type, description))
  )
})

export default connect(undefined, mapDispatchToProps)(DeletePostWithData)
