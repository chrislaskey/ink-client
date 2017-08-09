import React from 'react'
import { connect } from 'react-redux'
import { Field, change, reduxForm } from 'redux-form'
import { Button, Form, Input } from 'antd'
import { TwitterPicker } from 'react-color'

export const LabelsForm = ({handleSubmit, initialValues, onCancel, onSelectColor, submitting}) => {
  const NameInput = (props) => (
    <Input
      placeholder='Name'
      type='text'
      {...props.input}
    />
  )

  const colors = [
    '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3',
    '#03a9f4', '#00bcd4', '#009688', '#4caf50', '#8bc34a', '#cddc39',
    '#f8e71c', '#ffc107', '#ff9800', '#ff5722', '#795548', '#666666',
    '#aaaaaa'
  ]

  return (
    <Form className='label' onSubmit={handleSubmit}>
      <Form.Item>
        <label htmlFor='name'>Name</label>
        <Field name='name' component={NameInput} />
      </Form.Item>
      <Form.Item>
        <label htmlFor='color'>Color</label>
        <Field name='color' component='input' type='hidden' />
        <TwitterPicker
          width={'100%'}
          triangle='hide'
          colors={colors}
          color={initialValues.color}
          onChangeComplete={onSelectColor}
        />
      </Form.Item>
      <Button
        type='primary'
        htmlType='submit'
        loading={submitting}
        disabled={submitting}
      >
        Submit
      </Button>
      <Button onClick={onCancel}>
        Cancel
      </Button>
    </Form>
  )
}

const ReduxForm = reduxForm({
  form: 'labelsForm'
})(LabelsForm)

const mapStateToProps = (state, props) => ({
  initialValues: props.initialValues || {}
})

const mapDispatchToProps = (dispatch) => ({
  onSelectColor: (color) => dispatch(
    change('labelsForm', 'color', color.hex)
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxForm)
