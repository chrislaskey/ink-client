import React from 'react'
import { notification } from '../../helpers/notification'
import copyToClipboard from '../../helpers/copyToClipboard'
import { Button, Tooltip } from 'antd'

const Share = ({ link }) => {
  const onClick = (event) => {
    if (event) {
      event.preventDefault()
    }

    if (copyToClipboard(link)) {
      notification('Copied to clipboard', 'success')
    }
  }

  return (
    <Tooltip placement='bottom' title='Public Link'>
      <Button icon='link' onClick={onClick} />
    </Tooltip>
  )
}

export default Share
