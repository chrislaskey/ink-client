import join from 'url-join'
import parser from 'url-parse'

export const url = (path = '/') => (
  join(parser(window.location).origin, path)
)

export const postEditPath = (post) => (
  '/posts/' + post.uid + '/edit'
)

export const publicNotePath = (post) => (
  '/public/' + post.uid + '/' + post.secret
)

export const publicNoteUrl = (post) => (
  url(publicNotePath(post))
)

export default url
