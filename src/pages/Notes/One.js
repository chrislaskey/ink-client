import React from 'react'
import { connect } from 'react-redux'
import { compose, graphql } from 'react-apollo'
import { getNote, updateNote } from '../../api/notes'
import { getCurrentUserId } from '../../reducers/currentUser'
import { withVarsFromProps } from '../../helpers/graphql'
import { noteEditPath, publicNotePath, publicNoteUrl } from '../../helpers/paths'
import ButtonLink from '../../components/ButtonLink'
import DeleteNote from './_Delete'
import Label from './_Label'
import Note from './_Note'
import Share from './_Share'
import { Heading, Section } from '../../components/Section'
import { Button, Tooltip } from 'antd'

export const OneNote = ({data: {loading, note}, mutate, userId}) => {
  if (loading) {
    return <Section heading={<Heading />} />
  }

  const onCheck = (updatedBody) => mutate({
    variables: {
      uid: note.uid,
      title: note.title,
      body: updatedBody,
      userId: userId
    }
  })

  const heading = (
    <Heading>
      <div className='note-actions'>
        <Button.Group>
          <Share link={publicNoteUrl(note)} />
          <Tooltip placement='bottom' title='Share Preview'>
            <ButtonLink icon='eye-o' to={publicNotePath(note)} />
          </Tooltip>
          <Label note={note} />
        </Button.Group>
      </div>
      <div className='note-actions'>
        <Button.Group>
          <ButtonLink icon='edit' to={noteEditPath(note)}>
            <span> Edit</span>
          </ButtonLink>
          <DeleteNote note={note} />
        </Button.Group>
      </div>
    </Heading>
  )

  return (
    <Section padded id='one-note' heading={heading}>
      <Note note={note} onCheck={onCheck} />
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
