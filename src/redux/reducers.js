import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { test1, test2 } from '../containers'

export default combineReducers({
  routing: routerReducer,
  test1,
  test2
})
