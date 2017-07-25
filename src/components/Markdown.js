import React, {Component} from 'react'
import { findDOMNode } from 'react-dom'
import { map } from 'lodash'
import { addChecklists, createParser, updateChecklist } from '../helpers/markdown'

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
      const items = findDOMNode(this).querySelectorAll('.check-box input')
      const onClick = (itemIndex, event) => {
        const isChecked = event.target.checked
        const updated = updateChecklist(this.markdown, itemIndex, isChecked)

        this.markdown = updated
        this.props.onCheck(updated)
      }

      map(items, (item, index) => (
        item.onclick = onClick.bind(this, index)
      ))
    }
  }

  render () {
    const { options } = this.props
    const parser = createParser(options)
    const html = parser(this.markdown || '')

    return (
      <div
        className='markdown'
        dangerouslySetInnerHTML={{ __html: addChecklists(html) }}
      />
    )
  }
}

export default Markdown
