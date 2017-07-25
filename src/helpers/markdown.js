import marked from 'marked'
import hljs from 'highlight.js'

export const createParser = (passedOptions = {}) => {
  let defaultOptions = {
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    langPrefix: 'hljs '
  }

  if (typeof hljs !== 'undefined') {
    defaultOptions = {
      ...defaultOptions,
      highlight: (code, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          return hljs.highlight(lang, code).value
        }

        return code
      }
    }
  }

  marked.setOptions({
    ...defaultOptions,
    passedOptions
  })

  return marked
}

export const addChecklists = (html) => (
  html.replace(/<a/g, '<a target="_blank"')
      .replace(/<li>\[\s\]/g, '<li class="check-box"><input type="checkbox">')
      .replace(/<li>\[x\]/g, '<li class="check-box"><input checked type="checkbox">')
)

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
