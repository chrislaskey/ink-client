import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { getPost } from '../../api/posts'
import Page from '../../components/Page'
import DeletePost from './_Delete'
import Markdown from '../../components/Markdown'
import { Icon } from 'antd'

export const OnePost = ({data: {loading, post}}) => {
  if (!post) { return <Page loading /> }

  return (
    <Page loading={loading}>
      <h4>
        <Link to='/posts'>&laquo; Posts</Link>
      </h4>
      <h1>{post.title}</h1>
      <p>
        <Link
          to={'/posts/' + post.id + '/edit'}
          className='ant-btn'
        >
          <Icon type='edit' />
          {' '}
          Edit
        </Link>
        <DeletePost post={post} />
      </p>
      <div className='post-body'>
        <Markdown value={post.body} />
      </div>
    </Page>
  )
}

export default graphql(getPost, {
  options: (props) => ({
    variables: {
      id: props.match.params.id
    }
  })
})(OnePost)
