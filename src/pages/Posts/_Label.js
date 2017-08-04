import React, { Component } from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash'
import { createFlashMessage } from '../../actions/flashMessages'
import { Button, Popover } from 'antd'

class PostLabel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  render () {
    const { flashMessage } = this.props
    const updateVisibility = (value) => {
      this.setState({ visible: value })
    }
    const onClick = (event, label) => {
      if (event) {
        event.preventDefault()
      }

      flashMessage('Successfully added label ' + label.name, 'success')
      updateVisibility(false)
    }

    const labels = [
      {id: 1, name: 'one'},
      {id: 2, name: 'two'}
    ]

    const renderLabel = (label) => (
      <li key={label.id}>
        <a onClick={(event) => onClick(event, label)}>
          {label.name}
        </a>
      </li>
    )

    const content = (
      <ul>
        {map(labels, renderLabel)}
      </ul>
    )

    return (
      <Popover
        trigger='click'
        placement='bottom'
        title='Labels'
        content={content}
        visible={this.state.visible}
        onVisibleChange={updateVisibility}
      >
        <Button icon='tag' />
      </Popover>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  flashMessage: (title, type, description) => (
    dispatch(createFlashMessage(title, type, description))
  )
})

export default connect(undefined, mapDispatchToProps)(PostLabel)
