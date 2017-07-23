import { gql } from 'react-apollo'
import * as user from './user'

export const login = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        ...UserReadAttributes
        ...UserWriteAttributes
      }
    }
  }
  ${user.userReadAttributes}
  ${user.userWriteAttributes}
`
