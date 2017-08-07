import React from 'react'
import { isEmpty, map } from 'lodash'
import Markdown from '../../components/Markdown'
import RelativeTime from '../../components/RelativeTime'

export const Note = ({ onCheck, note }) => (
  <div className='note'>
    <div className='note-header'>
      <h1>{note.title}</h1>
      { !isEmpty(note.labels) &&
        <p>
          <strong>Labels: </strong>
          {map(note.labels, (label) => (
            <span key={label.id}>{label.name}</span>
          ))}
        </p>
      }
      <p>
        Created at: <RelativeTime time={note.insertedAt} /> |
        Last updated: <RelativeTime time={note.updatedAt} />
      </p>
    </div>
    <div className='note-body'>
      <Markdown onCheck={onCheck} value={note.body} />
    </div>
  </div>
)

Note.displayName = 'Note'

export default Note
