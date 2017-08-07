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

  return (
    <Page className='center-children window-height'>
      <div className='padded' style={{ backgroundColor: '#fff' }}>
        <h1>Login</h1>
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
