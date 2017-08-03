import React from 'react'
import { compose, graphql } from 'react-apollo'
import { getPublicPost } from '../../api/posts'
import { withVarsFromProps } from '../../helpers/graphql'
import Markdown from '../../components/Markdown'
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
      <h1>{post.title}</h1>
      <div className='post-body'>
        <Markdown value={post.body} />
      </div>
    </Section>
  )
}

const PublicPostWithData = compose(
  graphql(getPublicPost, withVarsFromProps({
    secret: 'match.params.secret',
    uid: 'match.params.uid'
  }))
)(PublicPost)

export default PublicPostWithData
