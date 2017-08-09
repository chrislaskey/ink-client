import { gql } from 'react-apollo'
import { labelAttributes, noteAttributes, userAttributes } from './attributes'

export const getNotes = gql`
  query Notes {
    notes {
      ...NoteAttributes
      user {
        ...UserAttributes
      }
    }
  }
  ${noteAttributes}
  ${userAttributes}
`

export const getNote = gql`
  query Note($uid: Int!) {
    note(uid: $uid) {
      ...NoteAttributes
      labels {
        ...LabelAttributes
      }
      user {
        ...UserAttributes
      }
    }
  }
  ${labelAttributes}
  ${noteAttributes}
  ${userAttributes}
`

export const getPublicNote = gql`
  query Note($uid: Int!, $secret: String!) {
    public_note(uid: $uid, secret: $secret) {
      ...NoteAttributes
      user {
        ...UserAttributes
      }
    }
  }
  ${noteAttributes}
  ${userAttributes}
`

export const createNote = gql`
  mutation CreateNote($title: String!, $body: String!) {
    create_note(title: $title, body: $body) {
      ...NoteAttributes
      user {
        ...UserAttributes
      }
    }
  }
  ${noteAttributes}
  ${userAttributes}
`

export const updateNote = gql`
  mutation UpdateNote($uid: Int!, $title: String!, $body: String!) {
    update_note(uid: $uid, note: {title: $title, body: $body}) {
      ...NoteAttributes
      user {
        ...UserAttributes
      }
    }
  }
  ${noteAttributes}
  ${userAttributes}
`

export const deleteNote = gql`
  mutation DeleteNote($uid: Int!) {
    delete_note(uid: $uid) {
      ...NoteAttributes
      user {
        ...UserAttributes
      }
    }
  }
  ${noteAttributes}
  ${userAttributes}
`

export const createNoteLabel = gql`
  mutation createNoteLabel($uid: Int!, $label_id: Int!) {
    create_note_label(uid: $uid, label_id: $label_id) {
      ...NoteAttributes
      user {
        ...UserAttributes
      }
    }
  }
  ${noteAttributes}
  ${userAttributes}
`

export const deleteNoteLabel = gql`
  mutation deleteNoteLabel($uid: Int!, $label_id: Int!) {
    delete_note_label(uid: $uid, label_id: $label_id) {
      ...NoteAttributes
      user {
        ...UserAttributes
      }
    }
  }
  ${noteAttributes}
  ${userAttributes}
`
