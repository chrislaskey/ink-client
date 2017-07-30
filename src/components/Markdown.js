import React, {Component} from 'react'
import { findDOMNode } from 'react-dom'
import { map } from 'lodash'
import { createParser, updateChecklist } from '../helpers/markdown'
import './Markdown.css'

class Markdown extends Component {
  constructor (props) {
    super(props)
    this.markdown = props.value
  }

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
        const updated = updateChecklist(this.markdown, itemIndex, isChecked)

        this.markdown = updated
        this.props.onCheck(updated)
      }

      map(items, (item, index) => {
        item.disabled = false
        item.onclick = onClick.bind(this, index)
      })
    }
  }

  render () {
    const { options } = this.props
    const parser = createParser(options)
    const html = parser.makeHtml(this.markdown || '')

    return (
      <div
        className='markdown'
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )
  }
}

export default Markdown
