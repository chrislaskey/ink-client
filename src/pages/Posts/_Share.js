import React from 'react'
import { connect } from 'react-redux'
import { createFlashMessage } from '../../actions/flashMessages'
import copyToClipboard from '../../helpers/copyToClipboard'
import { Button, Tooltip } from 'antd'

const Share = ({ flashMessage, link }) => {
  const onClick = (event) => {
    if (event) {
      event.preventDefault()
    }

    if (copyToClipboard(link)) {
      flashMessage('Copied to clipboard', 'success')
    }
  }

  return (
    <Tooltip placement='bottomRight' title='Share'>
      <Button icon='link' onClick={onClick} />
    </Tooltip>
  )
}

const mapDispatchToProps = (dispatch) => ({
  flashMessage: (title, type, description) => (
    dispatch(createFlashMessage(title, type, description))
  )
})

export default connect(undefined, mapDispatchToProps)(Share)
