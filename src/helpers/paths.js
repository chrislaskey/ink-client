import join from 'url-join'
import parser from 'url-parse'

export const url = (path = '/') => (
  join(parser(window.location).origin, path)
)

export const postEditPath = (post) => (
  '/posts/' + post.uid + '/edit'
)

export const publicPostPath = (post) => (
  '/public/' + post.uid + '/' + post.secret
)

export const publicPostUrl = (post) => (
  url(publicPostPath(post))
)

export default url
