import join from 'url-join'
import parser from 'url-parse'

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

export const labelEditPath = (note) => (
  '/labels/' + note.id + '/edit'
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
