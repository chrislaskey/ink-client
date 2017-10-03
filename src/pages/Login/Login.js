import React from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { login as loginMutation } from '../../api/session'
import { login as loginCurrentUser } from '../../actions/currentUser'
import { isLoggedIn } from '../../reducers/currentUser'
import history from '../../app/history'
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
        <Button onClick={onFacebookLogin}>Log in with Facebook</Button>
        <Button onClick={onGitHubLogin}>Log in with GitHub</Button>
        <LoginForm onSubmit={onSubmit} />
      </div>
    </Page>
  )
}

const LoginWithData = graphql(loginMutation)(Login)

const mapStateToProps = (state) => ({
  loggedIn: isLoggedIn(state)
})

const mapDispatchToProps = (dispatch) => ({
  onLogin: (data) => dispatch(loginCurrentUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithData)
