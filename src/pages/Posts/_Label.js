import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'
import { connect } from 'react-redux'
import { includes, map } from 'lodash'
import { createFlashMessage } from '../../actions/flashMessages'
import { getLabels } from '../../api/labels'
import { createPostLabel, deletePostLabel } from '../../api/posts'
import { clearCache } from '../../helpers/cache'
import { Button, Icon, Popover } from 'antd'

class PostLabel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  render () {
    const {
      data: { labels, loading },
      flashMessage,
      onCreate,
      onDelete,
      post
    } = this.props

    const postLabelIds = map(post.labels, 'id')
    const updateVisibility = (value) => this.setState({ visible: value })

    const onClick = async (event, label) => {
      if (event) {
        event.preventDefault()
      }

      const connected = includes(postLabelIds, label.id)
      const variables = {
        label_id: parseInt(label.id, 10),
        uid: post.uid
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
      flashMessage(message, 'success')
      updateVisibility(false)
    }

    const renderLabel = (label) => (
      <li key={label.id}>
        <a onClick={(event) => onClick(event, label)}>
          {label.name}
        </a>
      </li>
    )

    const content = loading ? <Icon type='loading' /> : (
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

const PostLabelWithData = compose(
  graphql(getLabels),
  graphql(createPostLabel, { name: 'onCreate' }),
  graphql(deletePostLabel, { name: 'onDelete' })
)(PostLabel)

const mapDispatchToProps = (dispatch) => ({
  flashMessage: (title, type, description) => (
    dispatch(createFlashMessage(title, type, description))
  )
})

export default connect(undefined, mapDispatchToProps)(PostLabelWithData)
