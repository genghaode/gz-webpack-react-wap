import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers'

const createStoreWithMiddleWare = applyMiddleware(
  thunk,
  createLogger()
)(createStore)

export const store = createStoreWithMiddleWare(reducer)
