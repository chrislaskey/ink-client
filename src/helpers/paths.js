import join from 'url-join'
import parser from 'url-parse'

export const url = (path = '/') => (
  join(parser(window.location).origin, path)
)

export default url
