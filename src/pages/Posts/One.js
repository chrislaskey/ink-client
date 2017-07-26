import React from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { getPost, updatePost } from '../../api/posts'
import { getCurrentUserId } from '../../reducers/currentUser'
import DeletePost from './_Delete'
import Markdown from '../../components/Markdown'
import { Heading, Section } from '../../components/Section'
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

  const heading = (
    <Heading>
      <div className='post-actions'>
        <Link
          to={'/posts/' + post.id + '/edit'}
          className='ant-btn'
        >
          <Icon type='edit' />
          <span> Edit</span>
        </Link>
        <DeletePost post={post} />
      </div>
      <Avatar id='current-user-avatar' size='medium' icon='user' />
    </Heading>
  )

  return (
    <Section id='one-post' heading={heading}>
      <h1>{post.title}</h1>
      <hr />
      <div className='post-body'>
        <Markdown onCheck={onCheck} value={post.body} />
      </div>
    </Section>
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
