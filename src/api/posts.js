import { gql } from 'react-apollo'

const postReadAttributes = gql`
  fragment PostReadAttributes on Post {
    id
  }
`

const postWriteAttributes = gql`
  fragment PostWriteAttributes on Post {
    title
    body
    user {
      id
    }
  }
`

export const getPosts = gql`
  query Posts {
    posts{
      ...PostReadAttributes
      ...PostWriteAttributes
      user {
        name
      }
    }
  }
  ${postReadAttributes}
  ${postWriteAttributes}
`

export const getPost = gql`
  query Post($id: Int!) {
    post(id: $id){
      ...PostReadAttributes
      ...PostWriteAttributes
      user {
        name
      }
    }
  }
  ${postReadAttributes}
  ${postWriteAttributes}
`

export const createPost = gql`
  mutation CreatePost($title: String!, $body: String!, $userId: Int!) {
    create_post(title: $title, body: $body, userId: $userId){
      ...PostReadAttributes
      ...PostWriteAttributes
      user {
        name
      }
    }
  }
  ${postReadAttributes}
  ${postWriteAttributes}
`

export const updatePost = gql`
  mutation UpdatePost($id: Int!, $title: String!, $body: String!, $userId: Int!) {
    update_post(id: $id, post: {title: $title, body: $body, userId: $userId}){
      ...PostReadAttributes
      ...PostWriteAttributes
      user {
        name
      }
    }
  }
  ${postReadAttributes}
  ${postWriteAttributes}
`

export const deletePost = gql`
  mutation DeletePost($id: Int!) {
    delete_post(id: $id){
      ...PostReadAttributes
      ...PostWriteAttributes
      user {
        name
      }
    }
  }
  ${postReadAttributes}
  ${postWriteAttributes}
`
