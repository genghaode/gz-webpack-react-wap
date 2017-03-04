import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { bannerData } from '../containers'

export default combineReducers({
  routing: routerReducer,
  bannerData
})
