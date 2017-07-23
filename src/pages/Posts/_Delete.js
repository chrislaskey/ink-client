import React from 'react'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { clearCache } from '../../helpers/cache'
import { deletePost } from '../../api/posts'

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
    <button onClick={onClick}>
      Delete Post
    </button>
  )
}

export default graphql(deletePost)(DeletePost)
