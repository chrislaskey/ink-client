import React from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { getPost, updatePost } from '../../api/posts'
import { getCurrentUserId } from '../../reducers/currentUser'
import Page from '../../components/Page'
import DeletePost from './_Delete'
import Markdown from '../../components/Markdown'
import { Avatar, Icon } from 'antd'

export const OnePost = ({data: {loading, post}, mutate, userId}) => {
  if (loading) { return null }

  const onCheck = (updatedBody) => mutate({
    variables: {
      id: parseInt(post.id, 10),
      title: post.title,
      body: updatedBody,
      userId: userId
    }
  })

  return (
    <div id='one-post' className='content-column window-height'>
      <div className='column-heading'>
        <div />
        <Avatar id='current-user-avatar' size="medium" icon="user" />
      </div>
      <div className='scroll-container'>
        <h1>{post.title}</h1>
        <hr/>
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
        <hr/>
        <div className='post-body'>
          <Markdown onCheck={onCheck} value={post.body} />
        </div>
      </div>
    </div>
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
