import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { getCurrentUser } from '../../reducers/currentUser'
import { Button, Form, Input } from 'antd'

const TitleInput = (props) => (
  <Input
    placeholder='Title'
    type='text'
    {...props.input}
  />
)

const BodyTextarea = (props) => (
  <Input.TextArea
    placeholder='Body'
    rows='8'
    type='text'
    {...props.input}
  />
)

export const PostsForm = ({handleSubmit, pristine, submitting}) => (
  <Form onSubmit={handleSubmit}>
    <Form.Item>
      <label htmlFor='title'>Title</label>
      <Field name='title' component={TitleInput} />
    </Form.Item>
    <Form.Item>
      <label htmlFor='body'>Body</label>
      <Field name='body' component={BodyTextarea} />
    </Form.Item>
    <Button
      type='primary'
      htmlType='submit'
      loading={submitting}
      disabled={pristine || submitting}
    >
      Submit
    </Button>
  </Form>
)

const ReduxForm = reduxForm({
  form: 'postsForm'
})(PostsForm)

const mapStateToProps = (state, props) => ({
  initialValues: {
    ...(props.initialValues || {}),
    userId: parseInt(getCurrentUser(state).id, 10)
  }
})

export default connect(mapStateToProps)(ReduxForm)
