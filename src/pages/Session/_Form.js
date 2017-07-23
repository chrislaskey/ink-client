import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const PostsForm = ({handleSubmit, pristine, submitting}) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor='email'>Email</label>
      <Field name='email' component='input' type='text' />
    </div>
    <div>
      <label htmlFor='password'>Password</label>
      <Field name='password' component='input' type='password' />
    </div>
    <button type='submit' disabled={pristine || submitting}>Login</button>
  </form>
)

const Form = reduxForm({
  form: 'sessionForm'
})(PostsForm)

export default Form
