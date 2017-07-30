import showdown from 'showdown'
import 'showdown-highlightjs-extension'

export const createParser = (passedOptions = {}) => {
  showdown.setFlavor('github')

  return new showdown.Converter({
    ...passedOptions,
    extensions: ['highlightjs']
  })
}

export const updateChecklist = (value, index, isChecked) => {
  let matchIndex = -1

  const markdownForCheckbox = /[-*] \[[vVxX ]\]/g
  const result = value.replace(markdownForCheckbox, (match) => {
    matchIndex = matchIndex + 1

    if (matchIndex !== index) {
      return match
    }

    return isChecked ? '- [x]' : '- [ ]'
  })

  return result
}
