import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as reduxFormReducer } from 'redux-form'
import apolloClient from '../app/apolloClient'

export default combineReducers({
  apollo: apolloClient.reducer(),
  form: reduxFormReducer,
  routing: routerReducer
})
