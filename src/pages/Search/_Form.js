import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, Icon, Input } from 'antd'

const SearchInput = (props) => (
  <Input
    placeholder='Search'
    type='text'
    {...props.input}
  />
)

export const SearchForm = ({handleSubmit, pristine, submitting}) => (
  <Form className='search' onSubmit={handleSubmit}>
    <Field name='search' component={SearchInput} />
    <Button
      type='primary'
      htmlType='submit'
      loading={submitting}
      disabled={pristine || submitting}
    >
      <Icon type='check' />
    </Button>
  </Form>
)

const ReduxForm = reduxForm({
  form: 'searchForm'
})(SearchForm)

const mapStateToProps = (state, props) => ({
  initialValues: props.initialValues || {}
})

export default connect(mapStateToProps)(ReduxForm)
