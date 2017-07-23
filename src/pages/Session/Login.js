import React from 'react'
import { connect } from 'react-redux'
import { graphql } from 'react-apollo'
import { isEmpty } from 'lodash'
import { login as loginMutation } from '../../api/session'
import { login as loginCurrentUser } from '../../actions/currentUser'
import history from '../../app/history'
import Page from '../../components/Page'
import Redirect from '../../components/Redirect'
import Form from './_Form'
import { getCurrentUser } from '../../reducers/currentUser'

export const Login = ({ currentUser, mutate, onLogin }) => {
  if (!isEmpty(currentUser)) {
    return <Redirect to='/' />
  }

  const onSubmit = async (values) => {
    const response = await mutate({ variables: values })
    const { token, user } = response.data.login

    onLogin({ token, ...user })
    history.push('/')
  }

  return (
    <Page>
      <h1>Login</h1>
      <Form onSubmit={onSubmit} />
    </Page>
  )
}

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  onLogin: (data) => dispatch(loginCurrentUser(data))
})

const LoginWithData = graphql(loginMutation)(Login)

export default connect(mapStateToProps, mapDispatchToProps)(LoginWithData)
