import { gql } from 'react-apollo'
import { userAttributes } from './attributes'

export const login = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      token_expiration
      user {
        ...UserAttributes
      }
    }
  }
  ${userAttributes}
`
