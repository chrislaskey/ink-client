import React from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { createFlashMessage } from '../../actions/flashMessages'
import { clearCache } from '../../helpers/cache'
import { deletePost } from '../../api/posts'
import { Button, Popconfirm } from 'antd'

export const DeletePost = ({ flashMessage, mutate, post }) => {
  const onClick = async () => {
    await mutate({
      variables: {
        id: parseInt(post.id, 10)
      }
    })
    clearCache()
    flashMessage('Successfully deleted post', 'warning')
    history.push('/posts')
  }

  return (
    <Popconfirm
      title='Are you sure delete this item?'
      onConfirm={onClick}
      onCancel={() => true}
      okText='Yes'
      cancelText='No'
    >
      <Button icon='delete' />
    </Popconfirm>
  )
}

const DeletePostWithData = graphql(deletePost)(DeletePost)

const mapDispatchToProps = (dispatch) => ({
  flashMessage: (title, type, description) => (
    dispatch(createFlashMessage(title, type, description))
  )
})

export default connect(undefined, mapDispatchToProps)(DeletePostWithData)
