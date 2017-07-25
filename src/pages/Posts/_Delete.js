import React from 'react'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { clearCache } from '../../helpers/cache'
import { deletePost } from '../../api/posts'
import { Button, Popconfirm } from 'antd'

export const DeletePost = ({ mutate, post }) => {
  const onClick = async () => {
    await mutate({
      variables: {
        id: parseInt(post.id, 10)
      }
    })
    clearCache()
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

export default graphql(deletePost)(DeletePost)
