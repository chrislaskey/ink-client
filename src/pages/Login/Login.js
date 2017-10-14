import React from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { logIn as logInMutation } from '../../api/session'
import { logIn as logInCurrentUser } from '../../actions/currentUser'
import { isLoggedIn } from '../../reducers/currentUser'
import history from '../../app/history'
import ApolloClient from '../../components/ApolloClient'
import Page from '../../components/Page'
import Redirect from '../../components/Redirect'
import LoginForm from './_LoginForm'
import { Button } from 'antd'

export const Login = ({ location, loggedIn, mutate, onLogin }) => {
  const landingPage = location.pathname !== '/' ? location.pathname : '/notes'

  if (loggedIn) {
    return <Redirect to={landingPage} />
  }

  const onSubmit = async (values) => {
    const response = await mutate({ variables: values })
    const { token, token_expiration, user } = response.data.login

    onLogin({ token, token_expiration, ...user })
    history.push(landingPage)
  }

  const onFacebookLogin = () => {
    const clientId = '124042831558199'
    const redirectUri = window.location.origin + '/login/facebook/callback'
    const url = [
      'https://www.facebook.com/v2.10/dialog/oauth',
      '?client_id=' + clientId,
      '&response_type=code',
      '&scope=email,public_profile',
      '&redirect_uri=' + redirectUri
    ].join('')

    window.location = url
  }

  const onGitHubLogin = () => {
    const clientId = '5a4237e25f982eb0d267'
    const url = [
      'https://github.com/login/oauth/authorize',
      '?client_id=' + clientId,
      '&scope=user:email'
    ].join('')

    window.location = url
  }

  return (
    <Page className='center-children window-height'>
      <div className='padded' style={{ backgroundColor: '#fff' }}>
        <h1>Login</h1>
        <ApolloClient client='oauth2'>
          <Button onClick={onFacebookLogin}>Log in with Facebook</Button>
          <Button onClick={onGitHubLogin}>Log in with GitHub</Button>
        </ApolloClient>
        <ApolloClient client='api'>
          <LoginForm onSubmit={onSubmit} />
        </ApolloClient>
      </div>
    </Page>
  )
}

const LoginWithData = graphql(logInMutation)(Login)

const mapStateToProps = (state) => ({
  loggedIn: isLoggedIn(state)
})

const mapDispatchToProps = (dispatch) => ({
  onLogin: (data) => dispatch(logInCurrentUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithData)
