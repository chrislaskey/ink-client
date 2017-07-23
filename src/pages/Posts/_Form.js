import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

export const PostsForm = ({handleSubmit, initialValues, pristine, submitting}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor='title'>Title</label>
      <Field name='title' component='input' type='text' />
    </div>
    <div>
      <label htmlFor='body'>Body</label>
      <Field name='body' component='textarea' />
    </div>
    <button type='submit' disabled={pristine || submitting}>Submit</button>
  </form>
)

const Form = reduxForm({
  form: 'postsForm'
})(PostsForm)

const mapStateToProps = (_, props) => ({
  initialValues: {
    ...(props.initialValues || {}),
    userId: 1 // TODO: grab user id from state
  }
})

export default connect(mapStateToProps)(Form)
