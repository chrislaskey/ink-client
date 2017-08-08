import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, Input } from 'antd'

const NameInput = (props) => (
  <Input
    placeholder='Name'
    type='text'
    {...props.input}
  />
)

const ColorInput = (props) => (
  <Input
    placeholder='Color'
    type='text'
    {...props.input}
  />
)

export const LabelsForm = ({handleSubmit, pristine, onCancel, submitting}) => (
  <Form className='label' onSubmit={handleSubmit}>
    <Form.Item>
      <label htmlFor='name'>Name</label>
      <Field name='name' component={NameInput} />
    </Form.Item>
    <Form.Item>
      <label htmlFor='color'>Color</label>
      <Field name='color' component={ColorInput} />
    </Form.Item>
    <Button
      type='primary'
      htmlType='submit'
      loading={submitting}
      disabled={pristine || submitting}
    >
      Submit
    </Button>
    <Button onClick={onCancel}>
      Cancel
    </Button>
  </Form>
)

const ReduxForm = reduxForm({
  form: 'labelsForm'
})(LabelsForm)

const mapStateToProps = (state, props) => ({
  initialValues: props.initialValues || {}
})

export default connect(mapStateToProps)(ReduxForm)
