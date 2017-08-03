import React from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { getPost, updatePost } from '../../api/posts'
import { getCurrentUserId } from '../../reducers/currentUser'
import { withVarsFromProps } from '../../helpers/graphql'
import ButtonLink from '../../components/ButtonLink'
import DeletePost from './_Delete'
import Post from './_Post'
import Share from './_Share'
import { postEditPath, publicPostPath, publicPostUrl } from '../../helpers/paths'
import { Heading, Section } from '../../components/Section'
import { Button, Tooltip } from 'antd'

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
          <Share link={publicPostUrl(post)} />
          <Tooltip placement='bottomRight' title='Share Preview'>
            <span>
              <ButtonLink icon='eye-o' to={publicPostPath(post)} />
            </span>
          </Tooltip>
        </Button.Group>
        <Button.Group>
          <ButtonLink icon='edit' to={postEditPath(post)}>
            <span> Edit</span>
          </ButtonLink>
          <DeletePost post={post} />
        </Button.Group>
      </div>
    </Heading>
  )

  return (
    <Section padded id='one-post' heading={heading}>
      <Post post={post} onCheck={onCheck} />
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
