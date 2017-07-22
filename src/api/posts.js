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

export const getPost = gql`
  query Post($id: Int!) {
    post(id: $id){
      id
      title
      body
      user {
        name
      }
    }
  }
`
