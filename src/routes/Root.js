import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { Home, Category, User } from '../containers'
import { App, Tab } from '../layouts'

const history = syncHistoryWithStore(browserHistory, store)

export const Root = () => {
  return (
    <Provider store={store}>
	    <Router history={history}>
			  <Route path="/" component={App}>
		    	<IndexRoute	components={{home: Home, tab: Tab}} />
			    <Route path="category" component={Category}>
			    	<IndexRoute	component={Tab} />
			    </Route>
			    <Route path="user" component={User}>
			    	<IndexRoute	component={Tab} />
			    </Route>
		    </Route>
	  	</Router>
	  </Provider>
  )
}
