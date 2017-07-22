import { gql } from 'react-apollo'

export const getPosts = gql`
  query Posts {
    posts{
      id
      title
      body
      user {
        name
      }
    }
  }
`
