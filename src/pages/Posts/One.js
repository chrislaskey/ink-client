import React from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { getPost, updatePost } from '../../api/posts'
import { getCurrentUserId } from '../../reducers/currentUser'
import Page from '../../components/Page'
import DeletePost from './_Delete'
import Markdown from '../../components/Markdown'
import { Icon } from 'antd'

export const OnePost = ({data: {loading, post}, mutate, userId}) => {
  if (!post) {
    return <Page loading />
  }

  const onCheck = (updatedBody) => mutate({
    variables: {
      id: parseInt(post.id, 10),
      title: post.title,
      body: updatedBody,
      userId: userId
    }
  })

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
        <Markdown onCheck={onCheck} value={post.body} />
      </div>
    </Page>
  )
}

const OnePostWithData = compose(
  graphql(getPost, {
    options: (props) => ({
      variables: {
        id: props.match.params.id
      }
    })
  }),
  graphql(updatePost)
)(OnePost)

const mapStateToProps = (state) => ({
  userId: getCurrentUserId(state)
})

export default connect(mapStateToProps)(OnePostWithData)
