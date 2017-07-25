import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'antd'
import { closeFlashMessage, showFlashMessage } from '../actions/flashMessages'

class FlashMessage extends Component {
  componentDidMount () {
    const {message, onShown} = this.props

    this.timeout = setTimeout(() => (
      onShown(message.id)
    ), 2000)
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  render () {
    const { message, onClose } = this.props
    const close = (event) => {
      if (event) { event.preventDefault() }
      onClose(message.id)
    }

    return (
      <Alert
        message={message.title}
        description={message.description}
        onClose={close}
        closable
        type={message.messageType}
      />
    )
  }
}

const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
  onClose: (id) => dispatch(closeFlashMessage(id)),
  onShown: (id) => dispatch(showFlashMessage(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashMessage)
