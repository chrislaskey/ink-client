export const login = (value) => ({
  type: 'CURRENT_USER_LOGIN',
  value
})

export const logout = () => ({
  type: 'CURRENT_USER_LOGOUT'
})
