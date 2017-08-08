import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import { includes, map } from 'lodash'
import { Link } from 'react-router-dom'
import { getLabels } from '../../api/labels'
import { createNoteLabel, deleteNoteLabel } from '../../api/notes'
import { clearCache } from '../../helpers/cache'
import { labelsPath } from '../../helpers/paths'
import { notification } from '../../helpers/notification'
import { Button, Icon, Popover } from 'antd'

class NoteLabel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  render () {
    const {
      data: { labels },
      onCreate,
      onDelete,
      note
    } = this.props

    const noteLabelIds = map(note.labels, 'id')
    const updateVisibility = (value) => this.setState({ visible: value })

    const onClick = async (event, label) => {
      if (event) {
        event.preventDefault()
      }

      const connected = includes(noteLabelIds, label.id)
      const variables = {
        label_id: parseInt(label.id, 10),
        uid: note.uid
      }

      let message

      if (connected) {
        message = 'Removed label ' + label.name
        await onDelete({ variables: variables })
      } else {
        message = 'Added label ' + label.name
        await onCreate({ variables: variables })
      }

      clearCache()
      notification(message, 'success')
      updateVisibility(false)
    }

    const renderLabel = (label) => {
      const classes = includes(noteLabelIds, label.id) ? 'active' : ''

      return (
        <li key={label.id} className={classes}>
          <a onClick={(event) => onClick(event, label)}>
            {label.name}
          </a>
        </li>
      )
    }

    const content = (
      <div className='note-label-dropdown'>
        <ul className='labels'>
          {map(labels, renderLabel)}
        </ul>
        <div className='footer'>
          <Link to={labelsPath()}>
            <Icon type='plus' />
            {' '}
            Manage Labels
          </Link>
        </div>
      </div>
    )

    return (
      <Popover
        trigger='click'
        placement='bottom'
        title='Add Label'
        content={content}
        visible={this.state.visible}
        onVisibleChange={updateVisibility}
      >
        <Button icon='tag' />
      </Popover>
    )
  }
}

const NoteLabelWithData = compose(
  graphql(getLabels),
  graphql(createNoteLabel, { name: 'onCreate' }),
  graphql(deleteNoteLabel, { name: 'onDelete' })
)(NoteLabel)

export default NoteLabelWithData
