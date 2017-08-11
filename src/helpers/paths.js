import join from 'url-join'
import parser from 'url-parse'
import qs from 'qs'
import { trim } from 'lodash'

export const queryString = () => {
  const raw = parser(window.location).query || ''
  const trimmed = trim(raw, '?')

  return qs.parse(trimmed) || {}
}

export const url = (path = '/') => (
  join(parser(window.location).origin, path)
)

// Labels

export const labelsPath = () => (
  '/labels'
)

export const labelNewPath = () => (
  '/labels/new'
)

export const labelEditPath = (label) => (
  '/labels/' + label.id + '/edit'
)

export const labelNotesPath = (label) => (
  '/labels/' + label.id + '/notes'
)

// Notes

export const noteEditPath = (note) => (
  '/notes/' + note.uid + '/edit'
)

export const publicNotePath = (note) => (
  '/public/' + note.uid + '/' + note.secret
)

export const publicNoteUrl = (note) => (
  url(publicNotePath(note))
)

export default url
