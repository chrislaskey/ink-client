import { gql } from 'react-apollo'

export const postReadAttributes = gql`
  fragment NoteReadAttributes on Note {
    uid
    secret
  }
`

export const postWriteAttributes = gql`
  fragment NoteWriteAttributes on Note {
    title
    body
  }
`

export const getNotes = gql`
  query Notes {
    posts {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${postReadAttributes}
  ${postWriteAttributes}
`

export const getNote = gql`
  query Note($uid: Int!) {
    post(uid: $uid) {
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
  ${postReadAttributes}
  ${postWriteAttributes}
`

export const getPublicNote = gql`
  query Note($uid: Int!, $secret: String!) {
    public_post(uid: $uid, secret: $secret) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${postReadAttributes}
  ${postWriteAttributes}
`

export const createNote = gql`
  mutation CreateNote($title: String!, $body: String!, $userId: Int!) {
    create_post(title: $title, body: $body, userId: $userId) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${postReadAttributes}
  ${postWriteAttributes}
`

export const updateNote = gql`
  mutation UpdateNote($uid: Int!, $title: String!, $body: String!, $userId: Int!) {
    update_post(uid: $uid, post: {title: $title, body: $body, userId: $userId}) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${postReadAttributes}
  ${postWriteAttributes}
`

export const deleteNote = gql`
  mutation DeleteNote($uid: Int!) {
    delete_post(uid: $uid) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${postReadAttributes}
  ${postWriteAttributes}
`

export const createNoteLabel = gql`
  mutation createNoteLabel($uid: Int!, $label_id: Int!) {
    create_post_label(uid: $uid, label_id: $label_id) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${postReadAttributes}
  ${postWriteAttributes}
`

export const deleteNoteLabel = gql`
  mutation deleteNoteLabel($uid: Int!, $label_id: Int!) {
    delete_post_label(uid: $uid, label_id: $label_id) {
      ...NoteReadAttributes
      ...NoteWriteAttributes
      user {
        name
      }
    }
  }
  ${postReadAttributes}
  ${postWriteAttributes}
`
