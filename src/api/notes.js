import { gql } from 'react-apollo'

export const noteReadAttributes = gql`
  fragment NoteReadAttributes on Note {
    uid
    secret
    insertedAt
    updatedAt
  }
`

export const noteWriteAttributes = gql`
  fragment NoteWriteAttributes on Note {
    title
    body
  }
`

export const getNotes = gql`
  query Notes {
    notes {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${noteReadAttributes}
  ${noteWriteAttributes}
`

export const getNote = gql`
  query Note($uid: Int!) {
    note(uid: $uid) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      labels {
        id
        color
        name
      }
      user {
        name
      }
    }
  }
  ${noteReadAttributes}
  ${noteWriteAttributes}
`

export const getPublicNote = gql`
  query Note($uid: Int!, $secret: String!) {
    public_note(uid: $uid, secret: $secret) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${noteReadAttributes}
  ${noteWriteAttributes}
`

export const createNote = gql`
  mutation CreateNote($title: String!, $body: String!) {
    create_note(title: $title, body: $body) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${noteReadAttributes}
  ${noteWriteAttributes}
`

export const updateNote = gql`
  mutation UpdateNote($uid: Int!, $title: String!, $body: String!) {
    update_note(uid: $uid, note: {title: $title, body: $body}) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${noteReadAttributes}
  ${noteWriteAttributes}
`

export const deleteNote = gql`
  mutation DeleteNote($uid: Int!) {
    delete_note(uid: $uid) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${noteReadAttributes}
  ${noteWriteAttributes}
`

export const createNoteLabel = gql`
  mutation createNoteLabel($uid: Int!, $label_id: Int!) {
    create_note_label(uid: $uid, label_id: $label_id) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${noteReadAttributes}
  ${noteWriteAttributes}
`

export const deleteNoteLabel = gql`
  mutation deleteNoteLabel($uid: Int!, $label_id: Int!) {
    delete_note_label(uid: $uid, label_id: $label_id) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${noteReadAttributes}
  ${noteWriteAttributes}
`
