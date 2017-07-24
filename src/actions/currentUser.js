import { clearCache } from '../helpers/cache'
import { deleteToken, updateToken } from '../helpers/token'

export const login = (value) => {
  updateToken(value.token)

  return {
    type: 'CURRENT_USER_LOGIN',
    value
  }
}

export const logout = () => {
  deleteToken()
  clearCache()

  return {
    type: 'CURRENT_USER_LOGOUT'
  }
}
