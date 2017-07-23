export const currentUserReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CURRENT_USER_LOGIN':
      return action.value
    default:
      return state
  }
}

export const getCurrentUser = (state) => state.currentUser

export default currentUserReducer
