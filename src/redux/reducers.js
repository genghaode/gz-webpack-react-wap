import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { bannerData, itemListData, loginStatus } from '../containers'

export default combineReducers({
  routing: routerReducer,
  bannerData,
  itemListData,
  loginStatus
})
