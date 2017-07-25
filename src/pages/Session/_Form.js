import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Icon, Input, Button } from 'antd'

const EmailInput = (props) => (
  <Input
    prefix={<Icon type='mail' style={{ fontSize: '13px' }} />}
    placeholder='Email'
    {...props.input}
  />
)

const PasswordInput = (props) => (
  <Input
    prefix={<Icon type='lock' style={{ fontSize: '13px' }} />}
    placeholder='Password'
    type='password'
    {...props.input}
  />
)

export const PostsForm = ({handleSubmit, pristine, submitting}) => (
  <Form onSubmit={handleSubmit}>
    <Form.Item>
      <label htmlFor='email'>Email</label>
      <Field name='email' component={EmailInput} />
    </Form.Item>
    <Form.Item>
      <label htmlFor='password'>Password</label>
      <Field name='password' component={PasswordInput} />
    </Form.Item>
    <Button
      type='primary'
      htmlType='submit'
      loading={submitting}
      disabled={pristine || submitting}
    >
      Login
    </Button>
  </Form>
)

const ReduxForm = reduxForm({
  form: 'sessionForm'
})(PostsForm)

export default ReduxForm
