import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'
import currentUserReducer from './currentUser'
import flashMessagesReducer from './flashMessages'

export default combineReducers({
  currentUser: currentUserReducer,
  flashMessages: flashMessagesReducer,
  form: reduxFormReducer,
  routing: routerReducer
})
