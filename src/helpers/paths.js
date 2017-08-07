import join from 'url-join'
import parser from 'url-parse'

export const url = (path = '/') => (
  join(parser(window.location).origin, path)
)

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
