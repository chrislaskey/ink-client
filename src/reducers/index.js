import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import apolloClient from '../app/apolloClient'

export default combineReducers({
  apollo: apolloClient.reducer(),
  routing: routerReducer
})
