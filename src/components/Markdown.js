import React, {Component} from 'react'
import { findDOMNode } from 'react-dom'
import { map } from 'lodash'
import { createParser, updateChecklist } from '../helpers/markdown'
import './Markdown.css'

class Markdown extends Component {
  componentDidMount () {
    this.bindChecklists()
  }

  componentDidUpdate () {
    this.bindChecklists()
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

  render () {
    const { options, value } = this.props
    const parser = createParser(options)
    const html = parser.makeHtml(value || '')

    return (
      <div
        className='markdown'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }
}

export default Markdown
