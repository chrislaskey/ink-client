import React from 'react'
import { graphql } from 'react-apollo'
import history from '../../app/history'
import { clearCache } from '../../helpers/cache'
import { deletePost } from '../../api/posts'

export const DeletePost = ({ mutate, post }) => {
  const onClickSuccess = (response) => clearCache() && history.push('/posts')
  const onClick = () => mutate({
    variables: {
      id: parseInt(post.id, 10)
    }
  }).then(onClickSuccess)

  return (
    <button onClick={onClick}>
      Delete Post
    </button>
  )
}

export default graphql(deletePost)(DeletePost)
