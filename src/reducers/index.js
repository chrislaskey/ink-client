import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'
import apolloClient from '../app/apolloClient'
import currentUserReducer from './currentUser'

export default combineReducers({
  apollo: apolloClient.reducer(),
  currentUser: currentUserReducer,
  form: reduxFormReducer,
  routing: routerReducer
})
