import React from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { Link } from 'react-router-dom'
import { getPost, updatePost } from '../../api/posts'
import { getCurrentUserId } from '../../reducers/currentUser'
import { withVarsFromProps } from '../../helpers/graphql'
import DeletePost from './_Delete'
import Markdown from '../../components/Markdown'
import { Heading, Section } from '../../components/Section'
import { Button, Icon } from 'antd'

export const OnePost = ({data: {loading, post}, mutate, userId}) => {
  if (loading) {
    return <Section heading={<Heading />} />
  }

  const onCheck = (updatedBody) => mutate({
    variables: {
      uid: post.uid,
      title: post.title,
      body: updatedBody,
      userId: userId
    }
  })

  const heading = (
    <Heading>
      <div />
      <div className='post-actions'>
        <Button.Group>
          <Link
            to={'/posts/' + post.uid + '/edit'}
            className='ant-btn'
          >
            <Icon type='edit' />
            <span> Edit</span>
          </Link>
          <DeletePost post={post} />
        </Button.Group>
      </div>
    </Heading>
  )

  return (
    <Section padded id='one-post' heading={heading}>
      <h1>{post.title}</h1>
      <div className='post-body'>
        <Markdown onCheck={onCheck} value={post.body} />
      </div>
    </Section>
  )
}

const OnePostWithData = compose(
  graphql(getPost, withVarsFromProps({uid: 'match.params.uid'})),
  graphql(updatePost)
)(OnePost)

const mapStateToProps = (state) => ({
  userId: getCurrentUserId(state)
})

export default connect(mapStateToProps)(OnePostWithData)
