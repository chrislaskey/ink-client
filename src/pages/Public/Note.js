import React from 'react'
import { compose, graphql } from 'react-apollo'
import { getPublicNote } from '../../api/posts'
import { withVarsFromProps } from '../../helpers/graphql'
import Note from '../Notes/_Note'
import { Heading, Section } from '../../components/Section'

export const PublicNote = ({data: {loading, public_post: post}}) => {
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
      <Note post={post} />
    </Section>
  )
}

PublicNote.displayName = 'PublicNote'

const PublicNoteWithData = compose(
  graphql(getPublicNote, withVarsFromProps({
    secret: 'match.params.secret',
    uid: 'match.params.uid'
  }))
)(PublicNote)

export default PublicNoteWithData
