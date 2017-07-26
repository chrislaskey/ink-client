import { isEqual } from 'lodash'

const initialState = {
  preferences: {}
}

export const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT_USER_LOGIN':
      return {
        ...state,
        ...action.values
      }
    case 'CURRENT_USER_LOGOUT':
      return initialState
    case 'CURRENT_USER_UPDATE_PREFERENCES':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          ...action.values
        }
      }
    default:
      return state
  }
}

export const isLoggedIn = (state) => !isEqual(initialState, state.currentUser)

export const getCurrentUser = (state) => state.currentUser

export const getCurrentUserId = (state) => parseInt(getCurrentUser(state).id, 10)

export const getPreferences = (state) => state.currentUser.preferences || {}

export const getPreference = (state, key) => getPreferences(state)[key]

export const tokenHasExpired = (state) => {
  const expiration = state.currentUser.token_expiration

  if (!expiration) { return false }

  const asInt = parseInt(expiration, 10)
  const now = Math.floor(Date.now() / 1000)

  return now >= asInt
}

export default currentUserReducer
