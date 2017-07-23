import { gql } from 'react-apollo'

export const userReadAttributes = gql`
  fragment UserReadAttributes on User {
    id
  }
`

export const userWriteAttributes = gql`
  fragment UserWriteAttributes on User {
    email
    name
  }
`
