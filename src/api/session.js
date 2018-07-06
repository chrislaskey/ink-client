import { gql } from 'react-apollo'
import { userAttributes } from './attributes'

export const logIn = gql`
  mutation LogIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
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
