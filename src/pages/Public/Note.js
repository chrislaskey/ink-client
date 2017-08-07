import React from 'react'
import { compose, graphql } from 'react-apollo'
import { getPublicPost } from '../../api/posts'
import { withVarsFromProps } from '../../helpers/graphql'
import Post from '../Posts/_Post'
import { Heading, Section } from '../../components/Section'

export const PublicPost = ({data: {loading, public_post: post}}) => {
  if (loading) {
    return <Section heading={<Heading />} />
  }

  const heading = (
    <Heading>
      <div />
      <div className='post-actions' />
    </Heading>
  )

  return (
    <Section padded id='public-post' heading={heading}>
      <Post post={post} />
    </Section>
  )
}

PublicPost.displayName = 'PublicPost'

const PublicPostWithData = compose(
  graphql(getPublicPost, withVarsFromProps({
    secret: 'match.params.secret',
    uid: 'match.params.uid'
  }))
)(PublicPost)

export default PublicPostWithData
