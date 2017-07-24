const initialState = {}

const hasExpired = (state) => {
  if (!state.token_expiration) { return true }

  const asInt = parseInt(state.token_expiration, 10)
  const now = Math.floor(Date.now() / 1000)

  return now >= asInt
}

export const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CURRENT_USER_LOGIN':
      return action.value
    case '@@INIT':
      if (hasExpired(state)) {
        return initialState
      }
      return state
    default:
      return state
  }
}

export const getCurrentUser = (state) => state.currentUser

export default currentUserReducer
