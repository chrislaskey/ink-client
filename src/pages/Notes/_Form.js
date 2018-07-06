import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, Input, Popconfirm } from 'antd'

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

export const NotesForm = ({handleSubmit, pristine, onCancel, submitting}) => (
  <Form className='note' onSubmit={handleSubmit}>
    <Form.Item>
      <label htmlFor='title'>Title</label>
      <Field name='title' component={TitleInput} />
    </Form.Item>
    <Form.Item>
      <label htmlFor='body'>Body</label>
      <Field name='body' component={BodyTextarea} />
    </Form.Item>
    <div className='form-actions'>
      <Button
        type='primary'
        htmlType='submit'
        loading={submitting}
        disabled={pristine || submitting}
      >
        Submit
      </Button>
      <Popconfirm
        title='Confirm Cancel?'
        onConfirm={onCancel}
        onCancel={() => true}
        okText='Leave Page'
        cancelText='Stay on Page'
      >
        <Button>
          Cancel
        </Button>
      </Popconfirm>
    </div>
  </Form>
)

const ReduxForm = reduxForm({
  form: 'notesForm'
})(NotesForm)

const mapStateToProps = (state, props) => ({
  initialValues: props.initialValues || {}
})

export default connect(mapStateToProps)(ReduxForm)
