import { gql } from 'react-apollo'

export const postReadAttributes = gql`
  fragment PostReadAttributes on Post {
    uid
    secret
  }
`

export const postWriteAttributes = gql`
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
    posts {
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
  query Post($uid: Int!) {
    post(uid: $uid) {
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

export const getPublicPost = gql`
  query Post($uid: Int!, $secret: String!) {
    public_post(uid: $uid, secret: $secret) {
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
    create_post(title: $title, body: $body, userId: $userId) {
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
  mutation UpdatePost($uid: Int!, $title: String!, $body: String!, $userId: Int!) {
    update_post(uid: $uid, post: {title: $title, body: $body, userId: $userId}) {
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
  mutation DeletePost($uid: Int!) {
    delete_post(uid: $uid) {
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

export const createPostLabel = gql`
  mutation createPostLabel($uid: Int!, $label_id: Int!) {
    create_post_label(uid: $uid, label_id: $label_id) {
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

export const deletePostLabel = gql`
  mutation deletePostLabel($uid: Int!, $label_id: Int!) {
    delete_post_label(uid: $uid, label_id: $label_id) {
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
