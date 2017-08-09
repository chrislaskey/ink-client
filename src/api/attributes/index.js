import { gql } from 'react-apollo'

export const noteAttributes = gql`
  fragment NoteAttributes on Note {
    uid
    secret
    title
    body
    insertedAt
    updatedAt
  }
`

export const labelAttributes = gql`
  fragment LabelAttributes on Label {
    id
    name
    color
  }
`

export const userAttributes = gql`
  fragment UserAttributes on User {
    id
    email
    name
  }
`
