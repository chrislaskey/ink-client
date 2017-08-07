import React from 'react'
import { isEmpty, map } from 'lodash'
import Markdown from '../../components/Markdown'

export const Post = ({ onCheck, post }) => (
  <div className='post'>
    <div className='post-header'>
      <h1>{post.title}</h1>
      { !isEmpty(post.labels) &&
        <p>
          <strong>Labels: </strong>
          {map(post.labels, (label) => (
            <span key={label.id}>{label.name}</span>
          ))}
        </p>
      }
    </div>
    <div className='post-body'>
      <Markdown onCheck={onCheck} value={post.body} />
    </div>
  </div>
)

Post.displayName = 'Post'

export default Post
