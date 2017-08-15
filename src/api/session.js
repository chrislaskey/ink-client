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

export const logInWithProvider = gql`
  mutation LogInWithProvider($code: String!, $provider: String!, $redirectUri: String!) {
    logInWithProvider(code: $code, provider: $provider, redirectUri: $redirectUri) {
      token
      token_expiration
      user {
        ...UserAttributes
      }
    }
  }
  ${userAttributes}
`
