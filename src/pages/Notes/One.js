import React from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { getNote, updateNote } from '../../api/posts'
import { getCurrentUserId } from '../../reducers/currentUser'
import { withVarsFromProps } from '../../helpers/graphql'
import { postEditPath, publicNotePath, publicNoteUrl } from '../../helpers/paths'
import ButtonLink from '../../components/ButtonLink'
import DeleteNote from './_Delete'
import Label from './_Label'
import Note from './_Note'
import Share from './_Share'
import { Heading, Section } from '../../components/Section'
import { Button, Tooltip } from 'antd'

export const OneNote = ({data: {loading, post}, mutate, userId}) => {
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
      <div className='post-actions'>
        <Button.Group>
          <Share link={publicNoteUrl(post)} />
          <Tooltip placement='bottom' title='Share Preview'>
            <ButtonLink icon='eye-o' to={publicNotePath(post)} />
          </Tooltip>
          <Label post={post} />
        </Button.Group>
      </div>
      <div className='post-actions'>
        <Button.Group>
          <ButtonLink icon='edit' to={postEditPath(post)}>
            <span> Edit</span>
          </ButtonLink>
          <DeleteNote post={post} />
        </Button.Group>
      </div>
    </Heading>
  )

  return (
    <Section padded id='one-post' heading={heading}>
      <Note post={post} onCheck={onCheck} />
    </Section>
  )
}

const OneNoteWithData = compose(
  graphql(getNote, withVarsFromProps({uid: 'match.params.uid'})),
  graphql(updateNote)
)(OneNote)

const mapStateToProps = (state) => ({
  userId: getCurrentUserId(state)
})

export default connect(mapStateToProps)(OneNoteWithData)
