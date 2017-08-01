import React, { Component } from 'react'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { map } from 'lodash'
import { createFlashMessage } from '../actions/flashMessages'
import copyToClipboard from '../helpers/copyToClipboard'
import { markdownToHtml, updateChecklist } from '../helpers/markdown'
import './Markdown.css'

class Markdown extends Component {
  componentDidMount () {
    this.bindChecklists()
    this.bindCodeBlocks()
  }

  componentDidUpdate () {
    this.bindChecklists()
    this.bindCodeBlocks()
  }

  bindChecklists () {
    if (this.props.onCheck) {
      const items = findDOMNode(this).querySelectorAll('input[type=checkbox]')
      const onClick = (itemIndex, event) => {
        const isChecked = event.target.checked
        const updated = updateChecklist(this.props.value, itemIndex, isChecked)

        this.props.onCheck(updated)
      }

      map(items, (item, index) => {
        item.disabled = false
        item.onclick = onClick.bind(this, index)
      })
    }
  }

  bindCodeBlocks () {
    const { flashMessage } = this.props
    const items = findDOMNode(this).querySelectorAll('a.copy-code-to-clipboard')
    const onClick = (item, event) => {
      const codeTag = item.nextElementSibling
      const code = codeTag.innerText.replace(/[ ]*$/, '')

      if (event) {
        event.preventDefault()
      }

      if (copyToClipboard(code)) {
        flashMessage('Copied to clipboard', 'success')
      }
    }

    map(items, (item) => (
      item.onclick = onClick.bind(this, item)
    ))
  }

  render () {
    const { options, value } = this.props
    const html = markdownToHtml(value || '', options || {})

    return (
      <div
        className='markdown'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  flashMessage: (title, type, description) => (
    dispatch(createFlashMessage(title, type, description))
  )
})

export default connect(undefined, mapDispatchToProps)(Markdown)
