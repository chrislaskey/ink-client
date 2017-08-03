import React from 'react'
import Markdown from '../../components/Markdown'

export const Post = ({ onCheck, post }) => (
  <div className='post'>
    <div className='post-header'>
      <h1>{post.title}</h1>
    </div>
    <div className='post-body'>
      <Markdown onCheck={onCheck} value={post.body} />
    </div>
  </div>
)

Post.displayName = 'Post'

export default Post
